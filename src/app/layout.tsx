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
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
