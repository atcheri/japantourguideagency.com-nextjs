import { FC, PropsWithChildren } from "react";

import { Inter } from "next/font/google";
import NavigationBar from "./NavigationBar";
import SiteFooter from "./SiteFooter";

const inter = Inter({ subsets: ["latin"] });

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
};

export default Layout;
