import { UsersRound } from "lucide-react";
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {about.eyebrow}
          </p>
          <h2
            id="about-title"
            className="mt-4 text-3xl font-semibold leading-tight tracking-headline text-on-surface sm:text-4xl"
          >
            {about.title}
          </h2>
          <p className="mt-6 text-base leading-7 text-on-surface-variant">
            {about.body}
          </p>

          <Card
            as="aside"
            className="mt-8 flex items-start gap-4 p-5 text-left sm:p-6"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary-light text-primary">
              <UsersRound className="size-5" aria-hidden="true" />
            </span>
            <p className="text-sm leading-6 text-on-surface-variant">
              {about.teamNote}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
