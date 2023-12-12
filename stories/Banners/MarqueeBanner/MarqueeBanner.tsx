import React from "react";
import { IconType } from "react-icons";
import "./marquee.css";
import { IoCodeSlashOutline } from "react-icons/io5";

type MarqueeBannerProps = {
  text: string;
  Icon: IconType;
  repeatCount: number;
};

const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  text,
  Icon,
  repeatCount,
}) => {
  // Create an array to map over for the repeat count
  const items = Array.from({ length: repeatCount }, (_, index) => (
    <div
      key={index}
      className="flex items-center flex-row gap-x-3 whitespace-nowrap marquee"
    >
      <IoCodeSlashOutline className="w-fit h-5 text-2xl" />
      <span className="text-xs">{text}</span>
    </div>
  ));

  return (
    <div className="bg-gray-200 py-2 flex  space-x-3  items-center flex-nowrap overflow-hidden ">
      {items}
    </div>
  );
};

export default MarqueeBanner;
