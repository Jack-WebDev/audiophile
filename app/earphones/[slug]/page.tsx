"use client";

import { useParams } from 'next/navigation';
import productData from '@/json/data.json';

export default function page() {
    const params = useParams();
    const product = productData.find((p) => p.slug === params.slug);
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    );
}
