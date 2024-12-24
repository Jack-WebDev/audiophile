"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.div
      className="bg-[url('/assets/home/mobile/image-header.jpg')] bg-contain h-[80vh] bg-repeat-x lg:bg-no-repeat flex flex-col justify-center items-center text-center md:bg-[url('/assets/home/tablet/image-header.jpg')] lg:bg-[url('/assets/home/desktop/image-hero.jpg')] lg:h-[90vh] lg:w-[99.2vw] lg:bg-top xl:bg-bottom lg:text-start"
      style={{
        backgroundSize: "100vw",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="grid gap-y-8 relative top-[-15%] md:top-[-15%] px-8 lg:left-[-5%]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-[#f1f1f1] tracking-[0.6rem]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          NEW PRODUCT
        </motion.h1>
        <motion.h2
          className="text-white text-4xl font-semibold md:text-6xl lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          XX99 Mark II Headphones
        </motion.h2>
        <motion.p
          className="text-white text-md font-light md:w-[60%] mx-auto md:mx-auto lg:w-1/2 lg:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link href={"/headphones/xx99-mark-two-headphones"} className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-medium 
            shadow-lg shadow-primary/20 hover:shadow-xl hover:bg-primary-foreground 
            transition-all transform hover:scale-105">
            SEE PRODUCT
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
