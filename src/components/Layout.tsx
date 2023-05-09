import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import { Inter } from "next/font/google";

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
      <Footer />
    </>
  );
};

export default Layout;
