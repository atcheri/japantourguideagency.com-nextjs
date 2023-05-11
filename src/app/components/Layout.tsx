"use client";

import { FC, PropsWithChildren } from "react";

import NavBarTw from "./NavBarTw";
import SiteFooter from "./SiteFooter";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <NavBarTw />
      <main
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
};

export default Layout;
