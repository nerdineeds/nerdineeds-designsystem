import React from "react";
import { FaArrowRight } from "react-icons/fa";

type HeroFlag = {
  content?: string;
  theme?: "light" | "dark";
};
function HeroFlag({ content }: HeroFlag) {
  return (
    <div className="rounded-full flex w-fit px-4 border  mx-auto text-xs py-1 my-6">
      {content}
      <span className="rounded-full text-center flex items-center justify-center">
        <FaArrowRight />
      </span>
    </div>
  );
}

export default HeroFlag;
