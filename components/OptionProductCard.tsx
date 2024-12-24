"use client";

import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type OptionProductCardProps = {
  img: string | StaticImageData;
  title: string;
  link: string;
};

export default function OptionProductCard({
  img,
  title,
  link,
}: OptionProductCardProps) {
  return (
    <motion.div
      className="relative flex flex-col justify-end items-center 
        bg-gradient-to-b from-gray-50 to-gray-100
        rounded-2xl p-6 md:p-8 lg:p-12 
        h-[200px] mx-4 group
        shadow-lg hover:shadow-xl
        transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="-top-16 transition-transform duration-500 group-hover:scale-110"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src={img}
          alt={title}
          width={120}
          height={120}
          className="drop-shadow-xl"
          priority
        />
      </motion.div>

      <motion.h2
        className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 
          bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href={link}
          className="flex items-center gap-1 text-gray-500 text-sm font-medium
            hover:text-primary transition-colors duration-300
            group/link"
        >
          SHOP
          <ChevronRight
            className="w-4 h-4 text-primary transition-transform duration-300
              group-hover/link:translate-x-1"
          />
        </Link>
      </motion.div>


    </motion.div>
  );
}
