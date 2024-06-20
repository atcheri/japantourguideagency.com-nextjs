import { FC, useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";

import { Button } from "@/components/ui/button";

import DesktopNavBar from "./DesktopNavBar";
import LogoLink from "../LogoLink";
import MobileNavBar from "./MobileNavBar";
import { useScrollColor } from "./hooks/useScrollColor";
import useWindowSize from "./hooks/useWindowSize";

const HIDE_NAVBAR_THRESHOLD: number = 10;
const NAVBAR_HIDE_MAX_WIDTH: number = 768;

const NavBar: FC = () => {
  const { bgColor, textColor } = useScrollColor();
  const { width } = useWindowSize();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        className="container mx-auto max-w-6xl flex items-center justify-between p-4 lg:px-8"
        aria-label="Main navigation bar"
      >
        <LogoLink />
        <Button
          variant="ghost"
          style={{ color: textColor }}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 hover:bg-accent/5 md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <HiMenu
            className="size-8"
            style={{ color: textColor }}
            aria-hidden="true"
          />
        </Button>
        <DesktopNavBar />
        <MobileNavBar
          mobileMenuOpen={mobileMenuOpen}
          mobileMenuClose={() => setMobileMenuOpen(false)}
        />
      </nav>
    </header>
  );
};

export default NavBar;
