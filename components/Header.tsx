"use client";
import { usePathname } from "next/navigation";

import NavBar from "./NavBar";

export default function Header() {
  const pathname = usePathname();
  const activeSegment = pathname.split("/")[1];
  return (
    <div className="bg-black">
      <NavBar />
      <h2 className="text-center text-white text-3xl py-12">{activeSegment.toUpperCase()}</h2>
    </div>
  );
}
