import "./globals.css";

import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  keywordMeta,
  openGraphMeta,
  robotsMeta,
  twitterMeta,
  viewPortMeta,
} from "./metatags";

import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import { Metadata } from "next";
import { SheetProvider } from "@/providers/sheet-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: keywordMeta,
  robots: robotsMeta,
  openGraph: openGraphMeta,
  twitter: twitterMeta,
  viewport: viewPortMeta,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 dark:bg-slate-900 ${inter.className}`}>
        <Layout>
          <SheetProvider />
          {children}
        </Layout>
      </body>
    </html>
  );
}
