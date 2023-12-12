import React from "react";
import logo from "./light-logo.PNG";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

type BrandSplitProps = {
  images: Image[];
  testimonial?: string;
  author?: string;
  slogan?: string;
  company?: string;
};

type Image = {
  src: string;
  label: string;
};

function BrandSplit({
  images,
  testimonial,
  author,
  slogan,
  company,
}: BrandSplitProps) {
  return (
    <section className="py-24 lg:pb-28 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap xl:items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            {testimonial && author && (
              <div className="md:max-w-md">
                <BiSolidQuoteAltLeft className="mb-2 w-fit h-14" />
                <h2
                  className="mb-6 text-3xl font-semibold"
                  style={{ letterSpacing: "-0.75px" }}
                >
                  {testimonial}
                </h2>
                <h3 className="text-xl font-semibold tracking-tight">
                  {author}
                </h3>
                <span className="text-gray-600 tracking-tight text-sm italic">
                  {company}
                </span>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-wrap justify-center -m-5 mb-12">
              {images &&
                images.map((image) => (
                  <div className="w-1/3 p-5" key={image.label}>
                    <Image
                      src={image.src}
                      alt={image.label}
                      width={75}
                      height={75}
                    />
                  </div>
                ))}
            </div>
            <p className="text-gray-600 tracking-tight">{slogan}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandSplit;
