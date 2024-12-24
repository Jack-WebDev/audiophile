'use client'

import OptionProductCard from "./OptionProductCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function OptionProducts() {
  const products = [
    {
      img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      title: "Speakers",
      link: "/speakers"
    },
    {
      img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      title: "Headphones",
      link: "/headphones"
    },
    {
      img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      title: "Earphones",
      link: "/earphones"
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="grid grid-cols-1 gap-8 
          sm:grid-cols-2 sm:gap-6 
          lg:grid-cols-3 lg:gap-8
          mt-20 md:mt-28">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    mass: 0.75
                  }
                }
              }}
              className={`
                sm:col-span-1 
                ${index === 2 && products.length === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}
              `}
            >
              <OptionProductCard
                img={product.img}
                title={product.title}
                link={product.link}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
