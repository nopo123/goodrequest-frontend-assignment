import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { AppProviders } from "@/lib/providers/AppProviders";

const inter = Inter({
  variable: "--font-app-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nadácia Good boy",
    template: "%s | Nadácia Good boy",
  },
  description:
    "Prispejte konkrétnemu útulku alebo celej nadácii Good boy a pomôžte psom nájsť domov",
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "Nadácia Good boy",
    title: "Nadácia Good boy",
    description:
      "Prispejte konkrétnemu útulku alebo celej nadácii Good boy a pomôžte psom v Žiline nájsť domov",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#4F46E5",
};

type RootLayoutProps = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="sk" className={inter.variable}>
    <body>
      <AppProviders>{children}</AppProviders>
    </body>
  </html>
);

export default RootLayout;
