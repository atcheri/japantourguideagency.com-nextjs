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
import { Metadata } from "next";
import { Toaster } from "sonner";
import Layout from "./components/Layout";

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
