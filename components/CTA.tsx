import Image from "next/image";
import React from "react";

export default function CTA() {
  return (
    <div className="grid gap-y-8 items-center justify-items-center text-center px-6 lg:flex lg:flex-row-reverse lg:gap-12 lg:text-left lg:px-12 my-12 lg:w-[55%] mx-auto">
      <div className="lg:flex-shrink-0">
        <Image
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="Best Gear"
          width={300}
          height={300}
          className="rounded-lg w-full md:hidden"
        />
        <Image
          src="/assets/shared/tablet/image-best-gear.jpg"
          alt="Best Gear"
          width={400}
          height={400}
          className="rounded-lg hidden md:block lg:hidden"
        />
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="Best Gear"
          width={500}
          height={500}
          className="rounded-lg hidden lg:block"
        />
      </div>

      <div className="grid gap-y-4">
        <h2 className="text-3xl font-bold tracking-wide lg:text-5xl">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p className="text-sm text-gray-600 lg:text-base ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
