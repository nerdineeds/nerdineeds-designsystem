import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroFlag from "./HeroFlag";

interface CTAHeroProps {
  theme?: string;
  label: string;
  link: string;
  image?: string;
}

export const CTAHero = ({ theme, label, link, image }: CTAHeroProps) => {
  console.log(image);
  return (
    <div
      style={{
        background: `url(${image.src})`,
        color: "white",
        textAlign: "center",
        padding: "100px 0",
      }}
    >
      <main className="flex flex-col justify-center text-purple-950">
        <HeroFlag theme="light" content="Now Accepting for 2024 Winter" />

        <h1 className="text-5xl font-normal leading-[3rem]">
          Unleash the true power of <br />
          AI and Blockchain
        </h1>
        <p className="max-w-lg mx-auto my-4 text-sm opacity-60">
          Experience the future of technology with Dummy, where AI and
          blockchain merge to revolutionise industries.
        </p>
        <div className="my-8">
          <button className="backdrop-opacity-10 backdrop-invert bg-white/30 backdrop-blur-md hover:bg-white/40 text-white border border-white/50 transition duration-300 ease-in-out rounded-lg py-1.5 text-sm shadow px-8 bg-purple-400 mx-3">
            Learn More
          </button>
          <button className="backdrop-opacity-10 backdrop-invert bg-white/30 backdrop-blur-md hover:bg-white/40 text-white border border-white/50 transition duration-300 ease-in-out rounded-lg py-1.5 text-sm shadow px-8 bg-purple-400 mx-3 text-black">
            Click me
          </button>
        </div>
      </main>
    </div>
  );
};
