import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import NavBarTw from "./NavBarTw";

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
      <Footer />
    </>
  );
};

export default Layout;
