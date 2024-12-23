"use client";

import { useParams } from "next/navigation";
import productData from "@/json/data.json";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import OptionProducts from "@/components/OptionProducts";
import CTA from "@/components/CTA";

export default function page() {
  const params = useParams();
  const product = productData.find((p) => p.slug === params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <NavBar />
      <div>
        <div>
          <Image
            src={product.image.mobile}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-xl w-[80%] mx-auto"
          />

          <h2>NEW PRODUCT</h2>
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <span>R{product.price}</span>

          <h2>Cart</h2>
        </div>

        <div>
          <div>

          <h3>FEATURES</h3>
          <p>{product.features}</p>
          </div>
          <div>
            <h3>INCLUDES</h3>
            <p>{product.includes.map((item) => item.item).join(", ")}</p>
          </div>
        </div>

        <div>
          <Image src={product.gallery.first.mobile} alt={product.name} width={300} height={300} className="rounded-xl w-[80%] mx-auto"/>
          <Image src={product.gallery.second.mobile} alt={product.name} width={300} height={300} className="rounded-xl w-[80%] mx-auto"/>
          <Image src={product.gallery.third.mobile} alt={product.name} width={300} height={300} className="rounded-xl w-[80%] mx-auto"/>
        </div>

        <div>
          <h3>You May Also Like</h3>
          <div>
            <Image src={product.others[0].image.mobile} alt={product.name} width={300} height={300} className="rounded-xl w-[80%] mx-auto"/>
            <Image src={product.others[1].image.mobile} alt={product.name} width={300} height={300} className="rounded-xl w-[80%] mx-auto"/>
            <Image src={product.others[2].image.mobile} alt={product.name} width={300} height={300} className="rounded-xl w-[80%] mx-auto"/>
          </div>
        </div>

        <OptionProducts/>
        <CTA/>
      </div>
    </div>
  );
}
