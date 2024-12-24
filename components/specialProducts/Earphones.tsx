"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';

export default function Earphones() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Section */}
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Mobile Image */}
          <Image
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={600}
            height={400}
            className="w-full object-cover md:hidden"
          />
          {/* Tablet Image */}
          <Image
            src="/assets/home/tablet/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={800}
            height={600}
            className="hidden w-full object-cover md:block lg:hidden"
          />
          {/* Desktop Image */}
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={1200}
            height={800}
            className="hidden w-full object-cover lg:block"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex flex-col items-center justify-center p-8 md:p-12 
            bg-gradient-to-br from-gray-100 to-gray-200 
            rounded-2xl shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 
              bg-gradient-to-r from-gray-900 to-gray-600 
              bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            YX1 Earphones
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="/earphones/yx1-earphones"
              className="group relative inline-flex items-center justify-center
                px-8 py-4 font-medium
                bg-transparent border-2 border-black rounded-lg
                overflow-hidden transition-all duration-300
                hover:bg-black hover:text-white
                active:scale-95"
            >
              <span className="relative z-10">
                See Product
              </span>
              <div className="absolute inset-0 bg-black transform -translate-x-full 
                group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

