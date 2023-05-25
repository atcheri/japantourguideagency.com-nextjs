import React, { FC, useEffect, useRef, useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";
import DesktopNavBar from "./DesktopNavBar";
import Image from "next/image";
import Link from "next/link";
import MobileNavBar from "./MobileNavBar";
import { useScrollColor } from "./hooks/useScrollColor";

const NavBar: FC = () => {
  const { bgColor, textColor } = useScrollColor();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prevPosY = window.scrollY;

    const handleShowNavBar = () => {
      const headerElement = headerRef.current;
      const currPosY = window.scrollY;
      const direction = currPosY > prevPosY ? "down" : "up";
      if (!headerElement) {
        return;
      } else if (direction === "up" && currPosY - prevPosY < -10) {
        headerElement.style.transform = "translateY(0)";
      } else if (direction === "down" && currPosY - prevPosY > 10) {
        headerElement.style.transform = "translateY(-90px)";
      }
      prevPosY = currPosY;
    };
    window.addEventListener("scroll", handleShowNavBar);
    return () => window.removeEventListener("scroll", handleShowNavBar);
  }, []);

  return (
    <header
      style={{ backgroundColor: bgColor }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      ref={headerRef}
    >
      <nav
        className="mx-auto max-w-screen-xl flex items-center justify-between p-6 lg:px-8"
        aria-label="Main navigation bar"
      >
        <div className="flex md:hidden">
          <button
            style={{ color: textColor }}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <Link href="/">
          <Image
            className="h-8 w-auto"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="..."
            width={50}
            height={50}
          />
        </Link>
        <DesktopNavBar />
      </nav>
      <MobileNavBar
        mobileMenuOpen={mobileMenuOpen}
        mobileMenuClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default NavBar;
