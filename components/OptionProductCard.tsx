"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
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
      className="flex flex-col justify-center items-center gap-y-4 bg-[#f1f1f1] rounded-lg p-4 md:p-8 lg:p-12 xl:p-16 relative h-[15vh] mx-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={img}
        alt={title}
        width={120}
        height={120}
        className="absolute -top-16"
      />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h2>
      <Link
        href={link}
        className="flex items-center text-gray-400 text-xs"
      >
        SHOP <ChevronRight className="text-primary" />
      </Link>
    </motion.div>
  );
}