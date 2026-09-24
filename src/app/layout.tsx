import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteContent } from "@/content/site-content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const { title, description } = siteContent.meta;
const ogImage = "/images/og-placeholder.svg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_AE",
    siteName: siteContent.header.brandName,
    images: [
      {
        url: ogImage,
        alt: siteContent.header.brandName,
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-on-surface">
        {children}
      </body>
    </html>
  );
}
