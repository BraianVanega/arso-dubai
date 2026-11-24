import Image from "next/image";
import { Container } from "@/components/Container";
import { siteContent } from "@/content/site-content";

function hrefForFooterItem(item: string) {
  if (item.includes("@")) {
    return `mailto:${item}`;
  }

  switch (item) {
    case "About Us":
    case "Consulting Team":
      return "#about";
    case "Compliance":
    case "Privacy Notice":
    case "Terms of Use":
      return "#compliance";
    case "Financial Consulting":
    case "Payments & Collections":
    case "Technology Development":
      return "#services";
    default:
      return "#contact";
  }
}

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="border-t border-outline bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((column, index) => (
            <div key={column.title}>
              {index === 0 ? (
                <div className="mb-4">
                  <Image
                    src="/images/logo.png"
                    alt=""
                    width={626}
                    height={719}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ) : null}
              <h2 className="text-sm font-semibold tracking-headline text-on-surface">
                {column.title}
              </h2>
              {column.items.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {column.items.map((item) => (
                    <li key={item}>
                      <a
                        href={hrefForFooterItem(item)}
                        className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-outline pt-6 text-center text-xs leading-5 text-on-surface-variant">
          {footer.legalLine}
        </p>
      </Container>
    </footer>
  );
}
