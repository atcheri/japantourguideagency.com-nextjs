"use client";

import { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

import NavBar from "./NavBar";
import SiteFooter from "./SiteFooter";
import { MobileNavBar } from "./NavBar/MobileNavBar";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <>
      <MobileNavBar />
      <NavBar />
      <main className={`${!isHome && "pt-24"}`}>{children}</main>
      <SiteFooter />
    </>
  );
};

export default Layout;
