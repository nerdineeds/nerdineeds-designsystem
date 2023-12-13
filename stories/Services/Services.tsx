import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { PiCaretDoubleRightThin, PiCaretRightLight } from "react-icons/pi";

interface ServicesProps {
  theme?: string;
  services: Service[];
  heading: string;
  image?: {
    url: string;
    label?: string;
  };
  link?: string;
}

type Service = {
  name: string;
  content: string;
};

export const Services: React.FC<ServicesProps> = ({
  services,
  heading,
  image,
  link,
}) => {
  return (
    <section className="relative py-12 md:py-24 bg-coolGray-50 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {image && (
          <div className="m:block absolute top-0 left-1/2 lg:ml-20 xl:-ml-52 mt-8 lg:mt-20 overflow-clip rounded-3xl grayscale opacity-30 shadow-lg w-80">
            <Image
              src={image.url}
              alt={image.label || heading}
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        )}
        <h1 className="font-heading text-6xl md:text-10xl tracking-tighter mb-24">
          {heading}
        </h1>
        {services.map((service, index) => (
          <Link
            className="relative group block xl:flex pb-8 mb-24 items-end border-b border-black"
            href={link || "#"}
            key={index}
          >
            <div className="mb-8 xl:mb-0">
              <span className="block lg:-mb-1 text-sm text-coolGray-600">
                0{index}
              </span>
              <h3 className="text-2xl xs:text-3xl lg:text-5xl inline-block pb-2 border-b-3 border-transparent group-hover:border-black transition duration-150">
                {service.name}
              </h3>
            </div>
            <div className="max-w-md  text-right mb-8 xl:mb-0 ml-auto xl:mr-20 text-base">
              <p>{service.content}</p>
            </div>
            <div className="text-right">
              <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                <svg
                  width="33"
                  height="33"
                  viewbox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 3L3 30"
                    stroke="black"
                    stroke-width="4.3875"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M30 27.758V3H5.24196"
                    stroke="black"
                    stroke-width="4.3875"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
