"use client";

import { MainNav } from "./Main";
import { MobileNav } from "./Mobile";
import { useMediaQuery } from "@/hooks/UseMediaQuery";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header
      id="header"
      className="bg-white sticky top-0 z-40 w-full pt-2 pb-2 mb-2"
    >
      {isDesktop ? <MainNav /> : <MobileNav />}
    </header>
  );
}
