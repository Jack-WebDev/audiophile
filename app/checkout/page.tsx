"use client";
import { CheckoutForm } from "@/components/CheckoutForm";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
export default function Checkout() {
  const router = useRouter();
  return (
    <div>
      <NavBar />
      <div className="grid">
        <motion.button
          onClick={() => router.back()}
          className="mt-12 text-gray-400 hover:text-gray-600 flex items-center gap-2 group relative left-20 w-fit"
          whileHover={{ x: -5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <ArrowLeft className="w-4 h-4  transition-transform group-hover:-translate-x-1" />
          GO BACK
        </motion.button>
        <CheckoutForm />
      </div>
    </div>
  );
}
