import * as React from "react";
import { ProductCard, ProductCardProps } from "../ProductCard/ProductCard";
import Link from "next/link";

interface FeaturedProductRowProps {
  heading: string;
  cta_link: string;
  cta_label: string;
  products: ProductCardProps[];
}

export const FeaturedProductRow: React.FC<FeaturedProductRowProps> = ({
  heading,
  products,
  cta_link,
  cta_label,
}) => {
  return (
    <section className="dark:bg-black py-12">
      <div className="my-6">
        <h2 className="text-2xl text-center">{heading}</h2>
      </div>
      <section className="flex mx-auto max-w-5xl justify-between gap-x-4">
        {products.map((product) => (
          <div className="w-1/3" key={product.title}>
            <ProductCard
              productImageUrl={product.productImageUrl}
              title={product.title}
              subtitle={product.subtitle}
              buttonText={product.buttonText}
              link={product.link}
            />
          </div>
        ))}
      </section>
      {cta_link && (
        <div className="mt-16 mb-6 mx-auto text-center">
          <button>
            <Link
              href={cta_label}
              alt={cta_label}
              className="border border-orange-300 py-5 px-16 dark:text-white tracking-wider hover:bg-orange-300 transition-color duration-500"
            >
              {cta_link}
            </Link>
          </button>
        </div>
      )}
    </section>
  );
};
