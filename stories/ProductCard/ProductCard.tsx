import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export interface ProductCardProps {
  productImageUrl: string | StaticImageData;
  title: string;
  subtitle: string;
  buttonText: string;
  link: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  productImageUrl,
  title,
  subtitle,
  buttonText,
  link,
}) => {
  return (
    <div className="overflow-hidden shadow-lg m-4 dark:bg-white bg-gray-400 w-full">
      <Image
        src={productImageUrl}
        alt={title}
        width={300}
        height={300}
        className="w-full"
      />
      <div className="px-6 py-4 text-center dark:text-black text-white">
        <h6 className="font-bold text-xl">{title}</h6>
        <p className="text-orange-300 text-base">{subtitle}</p>

        <Link
          href={link}
          className="border-orange-500 mb-6 mt-9 border hover:bg-orange-500 dark:hover:text-white hover:text-black transition-colors duration-300 dark:text-black text-white w-full text-center mx-auto justify-center inline-flex items-center py-3 pr-4 lowercase relative"
        >
          <span> {buttonText}</span>
          <GoArrowUpRight className="absolute right-2 text-2xl" />
        </Link>
      </div>
    </div>
  );
};
