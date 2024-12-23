'use client'

import OptionProductCard from "./OptionProductCard";
import { motion } from "framer-motion";

export default function OptionProducts() {
    return (
      <motion.div
        className="grid gap-y-20 mt-20 md:grid-cols-3 md:mt-28 lg:w-1/2 mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <OptionProductCard
          img="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          title="Speakers"
          link="/speakers"
        />
        <OptionProductCard
          img="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          title="Headphones"
          link="/headphones"
        />
        <OptionProductCard
          img="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          title="Earphones"
          link="/earphones"
        />
      </motion.div>
    );
  }
