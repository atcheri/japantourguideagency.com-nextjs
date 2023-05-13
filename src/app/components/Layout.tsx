"use client";

import { FC, PropsWithChildren } from "react";

import NavBar from "./NavBar";
import SiteFooter from "./SiteFooter";
import { usePathname } from "next/navigation";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <>
      <NavBar />
      <main className={`min-h-screen mx-auto ${!isHome && "mt-24"}`}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
};

export default Layout;
