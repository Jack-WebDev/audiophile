import CTA from "@/components/CTA";
import Header from "@/components/Header";
import OptionProducts from "@/components/OptionProducts";
import Product from "@/components/Product";
import productData from "@/json/data.json";

export default function Headphones() {
  return (
    <div>
      <Header />
      <Product
      flexDirection="lg:flex-row"
        products={productData.filter(
          (product) => product.category === "headphones"
        )}
      />
      <OptionProducts/>
      <CTA/>
    </div>
  );
}
