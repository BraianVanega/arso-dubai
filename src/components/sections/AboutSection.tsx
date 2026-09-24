import Image from "next/image";
import { BadgeCheck, UsersRound } from "lucide-react";
import { Container } from "@/components/Container";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site-content";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-16 border-b border-outline py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {about.eyebrow}
            </p>
            <h2
              id="about-title"
              className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-headline text-on-surface sm:text-4xl"
            >
              {about.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-on-surface-variant">
              {about.body}
            </p>
            <Card as="aside" className="mt-8 flex items-start gap-4 p-5 sm:p-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary-light text-primary">
                <UsersRound className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm leading-6 text-on-surface-variant">
                {about.teamNote}
              </p>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <div className="relative aspect-[4/5] max-h-72 bg-surface-container sm:max-h-80">
              <Image
                src="/images/kevin-placeholder.svg"
                alt={`${about.representative.name}, ${about.representative.role} (placeholder)`}
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
                {about.representative.label}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-headline text-on-surface">
                {about.representative.name}
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 rounded-sm border border-secondary/30 bg-secondary-light px-3 py-2 text-xs font-semibold text-secondary">
                <BadgeCheck className="size-4" aria-hidden="true" />
                {about.representative.role}
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
