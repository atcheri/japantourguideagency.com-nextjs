import { FC, useEffect, useRef, useState } from "react";
import { AlignJustify } from "lucide-react";

import { Button } from "@/components/ui/button";

import LogoLink from "../LogoLink";
import { useScrollColor } from "./hooks/useScrollColor";
import useWindowSize from "./hooks/useWindowSize";

import { DesktopNavigationMenu } from "./DesktopNavigationMenu";
import { mobileNavBarState } from "./MobileNavBar/mobileNavBarState";

const HIDE_NAVBAR_THRESHOLD: number = 10;
const NAVBAR_HIDE_MAX_WIDTH: number = 768;

const NavBar: FC = () => {
  const { bgColor, textColor } = useScrollColor();
  const { width } = useWindowSize();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { onOpen: onOpenMobileNavbar } = mobileNavBarState();

  useEffect(() => {
    let prevPosY = window.scrollY;

    const handleScrollDirection = () => {
      const headerEl = headerRef.current;
      if (!headerEl) {
        return;
      }
      if (width >= NAVBAR_HIDE_MAX_WIDTH) {
        headerEl.style.transform = "translateY(0px)";
        return;
      }
      const currPosY = window.scrollY;
      const direction = currPosY - prevPosY > 0 ? "down" : "up";
      if (
        direction === "down" &&
        currPosY - prevPosY > HIDE_NAVBAR_THRESHOLD &&
        width < NAVBAR_HIDE_MAX_WIDTH
      ) {
        headerEl.style.transform = "translateY(-100px)";
      } else if (
        direction === "up" &&
        currPosY - prevPosY < -HIDE_NAVBAR_THRESHOLD
      ) {
        headerEl.style.transform = "translateY(0px)";
      }
      prevPosY = currPosY;
    };
    window.addEventListener("scroll", handleScrollDirection);
    return () => window.removeEventListener("scroll", handleScrollDirection);
  }, [width]);

  return (
    <header
      style={{ backgroundColor: bgColor }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      ref={headerRef}
    >
      <nav
        className="container mx-auto max-w-7xl flex items-center justify-between p-4 xl:px-8"
        aria-label="Main navigation bar"
      >
        <LogoLink />
        <Button
          variant="ghost"
          style={{ color: textColor }}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 hover:bg-accent/5 md:hidden"
          onClick={onOpenMobileNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <AlignJustify
            className="size-8"
            style={{ color: textColor }}
            aria-hidden="true"
          />
        </Button>
        <DesktopNavigationMenu />
      </nav>
    </header>
  );
};

export default NavBar;
