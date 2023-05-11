"use client";

import { FC, PropsWithChildren } from "react";

import { Inter } from "next/font/google";
import NavBarTw from "./NavBarTw";
import SiteFooter from "./SiteFooter";

const inter = Inter({ subsets: ["latin"] });

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <NavBarTw />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
};

export default Layout;
