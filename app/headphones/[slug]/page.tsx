"use client";

import { useParams, useRouter } from "next/navigation";
import productData from "@/json/data.json";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import OptionProducts from "@/components/OptionProducts";
import CTA from "@/components/CTA";
import Link from "next/link";
import { ArrowLeft, CreditCard, Minus, Plus, ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CartItem, useCart } from "@/context/CartContext";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Page() {
  const [count, setCount] = useState(0);
  const { state, dispatch } = useCart();
  const params = useParams();
  const router = useRouter();
  const product = productData.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        Product not found
      </motion.div>
    );
  }

  const addToCart = () => {
    if (count === 0) return;

    const existingItem = state.items.find((item) => item.name === product.name);

    const cartItem: CartItem = {
      slug: existingItem?.slug ?? product.slug,
      category: product.category,
      name: product.name,
      price: product.price,
      quantity: count,
      image: {
        thumbnail: product.image.mobile,
        mobile: product.image.mobile,
        tablet: product.image.tablet,
        desktop: product.image.desktop,
      },
    };

    if (existingItem) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { slug: existingItem.slug, quantity: count },
      });
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: cartItem,
      });
    }
  };

  const addItem = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const removeItem = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <NavBar />
      <div className="grid gap-y-12 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.button
          onClick={() => router.back()}
          className="mt-12 text-gray-400 hover:text-gray-600 flex items-center gap-2 group"
          whileHover={{ x: -5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          GO BACK
        </motion.button>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 shadow-lg"
          variants={slideUp}
        >
          <motion.div
            className="relative overflow-hidden rounded-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={product.image.mobile}
              alt={product.name}
              width={300}
              height={300}
              className="w-full rounded-xl md:hidden lg:hidden"
            />
            <Image
              src={product.image.tablet}
              alt={product.name}
              width={300}
              height={300}
              className="hidden w-full rounded-xl md:block xl:hidden"
            />
            <Image
              src={product.image.desktop}
              alt={product.name}
              width={300}
              height={300}
              className="hidden w-full rounded-xl md:hidden xl:block"
            />
          </motion.div>

          <motion.div className="grid gap-y-6" variants={slideUp}>
            {product.new && (
              <motion.span
                className="text-primary tracking-[.7rem] font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                NEW PRODUCT
              </motion.span>
            )}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {product.name}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <span className="font-bold text-2xl text-primary">
              R{product.price}
            </span>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2 w-36">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={removeItem}
                  className="p-2 text-orange-500 hover:text-orange-600"
                >
                  <Minus className="w-4 h-4" />
                </motion.button>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={count}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="font-bold text-lg"
                  >
                    {count}
                  </motion.span>
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={addItem}
                  className="p-2 text-orange-500 hover:text-orange-600"
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all"
                onClick={() => addToCart()}
              >
                <ShoppingCart className="w-5 h-5" />
                ADD TO CART
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-12" variants={slideUp}>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Features</h3>
            {product.features.split("\n\n").map((feature, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-600 leading-relaxed"
              >
                {feature}
              </motion.p>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">In The Box</h3>
            <div className="space-y-4">
              {product.includes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-primary font-bold">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-600">{item.item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={slideUp}
        >
          {[
            product.gallery.first,
            product.gallery.second,
            product.gallery.third,
          ].map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.mobile}
                alt={`Gallery ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover md:hidden"
              />
              <Image
                src={image.tablet}
                alt={`Gallery ${index + 1}`}
                width={300}
                height={300}
                className="hidden w-full h-full object-cover md:block lg:hidden"
              />
              <Image
                src={image.desktop}
                alt={`Gallery ${index + 1}`}
                width={300}
                height={300}
                className="hidden w-full h-full object-cover lg:block"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center space-y-8" variants={slideUp}>
          <h3 className="text-2xl font-bold">You May Also Like</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {product.others.map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.image.mobile}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full rounded-xl md:hidden"
                  />
                  <Image
                    src={item.image.tablet}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="hidden w-full rounded-xl md:block lg:hidden"
                  />
                  <Image
                    src={item.image.desktop}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="hidden w-full rounded-xl lg:block"
                  />
                </motion.div>
                <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <Link
                  href={`/${
                    item.slug.includes("headphones")
                      ? "headphones"
                      : item.slug.includes("earphones")
                      ? "earphones"
                      : "speakers"
                  }/${item.slug}`}
                  className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-medium 
    shadow-lg shadow-primary/20 hover:shadow-xl hover:bg-primary-foreground
    transition-all transform hover:scale-105"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <OptionProducts />
        <CTA />
      </div>
    </motion.div>
  );
}
