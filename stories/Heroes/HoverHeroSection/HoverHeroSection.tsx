import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HoverHeroSectionProps {
  theme?: string;
  label: string;
  link: string;
  image?: string;
}

export const HoverHeroSection = ({
  theme,
  label,
  link,
  image,
}: HoverHeroSectionProps) => {
  return (
    <div className="bg-black border border-white text-white relative text-center h-[300px] flex justify-center items-center">
      <div className="w-full h-full hover:bg-black/40 absolute transition-all ease-in-out duration-500 cursor-pointer"></div>
      <Link className="image_link w-1/2 cursor-pointer text-center" href={link}>
        {image ? (
          <Image alt={label} src={image} width={950} height={150} />
        ) : (
          <h1>{label}</h1>
        )}
      </Link>
    </div>
  );
};
