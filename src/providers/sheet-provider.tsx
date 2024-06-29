"use client";

import { MobileNavbar } from "@/app/components/NavBar/mobile-navbar";
import { useMountedState } from "react-use";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <MobileNavbar />
    </>
  );
};
