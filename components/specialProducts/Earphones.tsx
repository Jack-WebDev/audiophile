import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Earphones() {
  return (
    <div className="grid place-items-center gap-y-8 my-8 md:grid-cols-2 md:mx-16 lg:w-1/2 lg:mx-auto">
      {/* Responsive Images for Mobile, Tablet, and Desktop */}
      <Image
        src="/assets/home/mobile/image-earphones-yx1.jpg" // Default image for mobile
        alt="Earphones"
        width={600} // Adjust width
        height={400} // Adjust height
        className="rounded-xl w-[90%] mx-auto md:hidden"
      />
      <Image
        src="/assets/home/tablet/image-earphones-yx1.jpg" // Image for tablet
        alt="Earphones"
        width={800}
        height={600}
        className="rounded-xl hidden md:block md:w-full lg:hidden"
      />
      <Image
        src="/assets/home/desktop/image-earphones-yx1.jpg" // Image for desktop
        alt="Earphones"
        width={1200}
        height={800}
        className="rounded-xl hidden lg:block lg:w-full"
      />

      {/* Description and Link */}
      <div className="grid gap-y-6 bg-gray-200 rounded-lg p-6 text-center w-[90%] mx-auto md:h-full md:content-center">
        <h2 className="text-3xl font-semibold md:justify-evenly">YX1 Earphones</h2>
        <Link
          href={"?"}
          className="text-black border border-black py-4 px-8 rounded-lg md:h-fit"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
