"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ProductProps = {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  description: string;
  new: boolean;
};

type ProductCardProps = {
  product: ProductProps;
  index: number;
  flexDirection?: string;
};

interface StyleProps extends ProductProps {
  flexDirection?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Product({
  products,
  flexDirection = "flex-col",
}: {
  products: StyleProps[];
  flexDirection?: string;
}) {
  return (
    <motion.div
      className="grid gap-y-16 py-8"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          index={index}
          flexDirection={flexDirection}
        />
      ))}
    </motion.div>
  );
}

const ProductCard = ({ product, index, flexDirection }: ProductCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`grid gap-y-8 lg:flex lg:items-center lg:gap-2 
        ${index === 1 ? "lg:flex-row-reverse" : flexDirection} 
        mb-12 lg:w-4/5 mx-4 lg:mx-auto
        bg-white rounded-2xl shadow-lg overflow-hidden
        hover:shadow-xl transition-shadow duration-300 md:mx-8`}
      variants={fadeInUp}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <motion.div
        className="lg:flex-shrink-0 relative overflow-hidden group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="md:hidden">
          <Image
            src={product.image.mobile}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-t-2xl w-full object-cover transform 
              group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <Image
            src={product.image.tablet}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-t-2xl w-full object-cover transform 
              group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src={product.image.desktop}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-l-2xl w-full object-cover transform 
              group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>

      <motion.div
        className="grid gap-y-6 p-8 text-center lg:text-left"
        variants={fadeInUp}
      >
        {product.new && (
          <motion.h2
            className="text-primary tracking-[.7rem] font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            NEW PRODUCT
          </motion.h2>
        )}
        <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 lg:text-base leading-relaxed">
          {product.description}
        </p>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            href={`/${product.category}/${product.slug}`}
            className="inline-block bg-gradient-to-r from-primary to-primary-foreground 
              text-white py-4 px-8 rounded-lg font-medium
              shadow-lg hover:shadow-xl 
               transition-all duration-300"
          >
            SEE PRODUCT
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
