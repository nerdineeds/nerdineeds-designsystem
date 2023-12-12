import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ImpactAboutUsProps {
  heading: string;
  subHeading: string;
  description: string[];
  stats: {
    label: string;
    value: string;
  }[];
  link: {
    url: string;
    label: string;
  };
}

export const ImpactAboutUs = ({
  heading,
  subHeading,
  description,
  stats,
  link,
}: ImpactAboutUsProps) => {
  return (
    <section className="py-12 md:py-24 bg-coolGray-50">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-6xl md:text-10xl mb-8 tracking-tightest">
          {heading}
        </h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-3/12 xl:w-2/12 px-4 mb-14 lg:mb-0">
            <a
              className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black"
              href={link.url}
            >
              <span className="mr-4">{link.label}</span>
              {/* Arrow SVG omitted for brevity */}
            </a>
          </div>
          <div className="w-full lg:w-9/12 xl:w-10/12 px-4">
            <div className="lg:max-w-5xl lg:ml-20 lg:-mt-6">
              <p
                className="text-xl xs:text-2xl tracking-tight mb-10"
                style={{ textIndent: "6rem" }}
              >
                {description.map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
              </p>
              <ul>
                {stats.map((stat, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between mb-8 pb-2 border-b-2 border-black"
                  >
                    <span>{stat.label}</span>
                    <span className="text-2xl">
                      <span>{stat.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
