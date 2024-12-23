"use client";

import { useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSegment = useSelectedLayoutSegment();

  const links = [
    { href: "/", label: "Home", segment: null },
    { href: "/headphones", label: "Headphone", segment: "headphones" },
    { href: "/speakers", label: "Speakers", segment: "speakers" },
    { href: "/earphones", label: "Earphones", segment: "earphones" },
  ];

  return (
    <div className="bg-black">
      <div className="flex justify-between items-center bg-black text-white py-8 px-4 md:px-8 xl:border-b border-gray-200 xl:w-1/2 mx-auto">
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />

        <ul
          className={`${
            isMobileMenuOpen ? "grid" : "hidden"
          } absolute md:relative translate-y-28 md:translate-y-0 ease-in-out right-0 text-center left-0 w-full md:w-auto bg-black md:bg-transparent md:flex md:items-center gap-x-8 p-4 md:p-0`}
        >
          {links.map((link) => (
            <li key={link.href} className="my-2 md:my-0">
              <Link
                href={link.href}
                className={`block md:inline ${
                  activeSegment === link.segment
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
}
