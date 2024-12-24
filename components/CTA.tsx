"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


export default function CTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <motion.div 
          className="order-1 lg:order-2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* Mobile Image */}
            <Image
              src="/assets/shared/mobile/image-best-gear.jpg"
              alt="Best Gear"
              width={300}
              height={300}
              className="w-full object-cover md:hidden"
            />
            {/* Tablet Image */}
            <Image
              src="/assets/shared/tablet/image-best-gear.jpg"
              alt="Best Gear"
              width={400}
              height={400}
              className="hidden w-full object-cover md:block lg:hidden"
            />
            {/* Desktop Image */}
            <Image
              src="/assets/shared/desktop/image-best-gear.jpg"
              alt="Best Gear"
              width={500}
              height={500}
              className="hidden w-full object-cover lg:block"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="order-2 lg:order-1 text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Bringing you the{' '}
            <span className="text-primary relative">
              best
              <motion.span
                className="absolute -z-10 bottom-0 left-0 w-full h-3 bg-primary/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
            {' '}audio gear
          </motion.h2>

          <motion.p 
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0
              text-sm sm:text-base lg:text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Located at the heart of New York City, Audiophile is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for
            you to browse and experience a wide range of our products. Stop by our
            store to meet some of the fantastic people who make Audiophile the
            best place to buy your portable audio equipment.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}