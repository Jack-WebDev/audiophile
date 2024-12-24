"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Speaker1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid place-items-center text-center gap-y-8 text-white bg-primary bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-contain bg-center p-6 mx-4 md:mx-12 rounded-xl mt-20 lg:grid-cols-2 lg:w-[65%] lg:mx-auto shadow-lg"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/assets/home/mobile/image-speaker-zx9.png"
          alt="Speaker"
          width={100}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="md:hidden"
        />
        <Image
          src="/assets/home/tablet/image-speaker-zx9.png"
          alt="Speaker"
          width={240}
          height={240}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="hidden md:block lg:hidden"
        />
        <Image
          src="/assets/home/desktop/image-speaker-zx9.png"
          alt="Speaker"
          width={400}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="hidden lg:block"
        />
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="grid gap-y-8"
      >
        <h2 className="text-3xl font-semibold tracking-wide md:text-4xl lg:text-5xl">
          ZX9 SPEAKER
        </h2>
        <p className="text-sm font-light md:text-base lg:text-lg">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="justify-self-center"
        >
          <Link
            href="/speakers/zx9-speaker"
            className="group relative inline-flex items-center justify-center
                  px-8 py-4 font-medium
                  bg-transparent border-2 border-black rounded-lg
                  overflow-hidden transition-all duration-300
                  hover:bg-black hover:text-white
                  active:scale-95"
          >
            <span className="relative z-10">See Product</span>
            <div
              className="absolute inset-0 bg-black transform -translate-x-full 
                  group-hover:translate-x-0 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
