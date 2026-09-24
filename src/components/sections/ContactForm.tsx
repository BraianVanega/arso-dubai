"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/cn";
import {
  clientTypeOptions,
  contactSchema,
  type ContactValues,
} from "@/lib/contact";

const fieldClassName =
  "w-full rounded-sm border border-outline bg-surface px-3 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export function ContactForm() {
  const { form } = siteContent.contact;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      clientType: clientTypeOptions[0],
      email: "",
      phone: "",
      message: "",
    },
  });

  return (
    <form
      className="space-y-4"
      noValidate
      onSubmit={handleSubmit((values) => {
        // TODO: wire up real form submission (Resend or similar)
        void values;
        reset();
      })}
    >
      {form.fields.map((field) => {
        const error = errors[field.name as keyof ContactValues]?.message;
        const describedBy = error ? `${field.name}-error` : undefined;

        return (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium text-on-surface"
            >
              {field.label}
              {field.required ? (
                <span className="text-primary" aria-hidden="true">
                  {" "}
                  *
                </span>
              ) : null}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                rows={5}
                aria-invalid={Boolean(error)}
                aria-describedby={describedBy}
                className={cn(fieldClassName, "min-h-32 resize-y")}
                {...register(field.name as keyof ContactValues)}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                aria-invalid={Boolean(error)}
                aria-describedby={describedBy}
                className={fieldClassName}
                {...register(field.name as keyof ContactValues)}
              >
                {"options" in field
                  ? field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))
                  : null}
              </select>
            ) : (
              <input
                id={field.name}
                type={field.type}
                aria-invalid={Boolean(error)}
                aria-describedby={describedBy}
                className={fieldClassName}
                {...register(field.name as keyof ContactValues)}
              />
            )}

            {error ? (
              <p
                id={`${field.name}-error`}
                className="mt-1.5 text-xs text-red-700"
                role="alert"
              >
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {form.submitLabel}
      </Button>
    </form>
  );
}
