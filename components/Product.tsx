import Image from "next/image";
import Link from "next/link";

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
};

interface StyleProps extends ProductProps {
  flexDirection?: string; // Optional with default
}

export default function Product({
  products,
  flexDirection = "flex-col", // Default value
}: {
  products: StyleProps[];
  flexDirection?: string;
}) {
  return (
    <div className="grid gap-y-12">
      {products.map((product, index) => (
        <div
          key={index}
          className={`grid gap-y-8 lg:flex lg:items-center text-center lg:gap-12 ${
            index === 1 ? "lg:flex-row-reverse" : flexDirection
          } mb-12 lg:w-1/2 lg:text-start mx-auto`}
        >
          {/* Responsive Images */}
          <div className="lg:flex-shrink-0 my-8">
            {/* Mobile Image */}
            <div className="md:hidden">
              <Image
                src={product.image.mobile}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-xl w-[80%] mx-auto"
              />
            </div>
            {/* Tablet Image */}
            <div className="hidden md:block lg:hidden">
              <Image
                src={product.image.tablet}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
            </div>
            {/* Desktop Image */}
            <div className="hidden lg:block">
              <Image
                src={product.image.desktop}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="grid gap-y-4 text-center lg:text-left">
            <h2 className="text-sm tracking-[0.7rem] uppercase text-primary font-medium">
              New Product
            </h2>
            <h3 className="text-4xl font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600 lg:text-base mx-4 lg:mx-0">
              {product.description}
            </p>
            <Link
              href={`/${product.category}/${product.slug}`}
              className="bg-primary text-white py-4 px-8 rounded-lg mx-4 md:w-fit md:justify-self-center lg:justify-self-start lg:mx-0"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
