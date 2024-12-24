"use client"

import Link from "next/link";
import { motion } from 'framer-motion';

export default function Speaker2() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div 
        className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] 
            md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] 
            lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] 
            bg-no-repeat bg-cover bg-center
            transition-transform duration-700 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        <motion.div 
          className="relative h-full flex items-center"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="ml-8 md:ml-12 lg:ml-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6
                bg-gradient-to-r from-gray-900 to-gray-600 
                bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              ZX7 SPEAKER
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                href="/speakers/zx7-speaker"
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
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
