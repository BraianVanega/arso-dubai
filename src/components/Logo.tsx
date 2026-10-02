import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function Logo() {
  const { header } = siteContent;

  return (
    <a
      href="#home"
      className="flex min-w-0 items-center gap-3 no-underline"
      aria-label={header.brandName}
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={626}
        height={719}
        priority
        className="h-14 w-auto shrink-0 object-contain"
      />
      <span className="flex min-w-0 flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface">
          {header.brandName}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-on-surface-variant">
          {header.tagline}
        </span>
      </span>
    </a>
  );
}
