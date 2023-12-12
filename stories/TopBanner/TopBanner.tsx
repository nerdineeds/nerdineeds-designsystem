import React from "react";
import "./TopBanner.css";
import Link from "next/link";

interface TopBannerProps {
  theme?: string;

  /**
   * TopBanner contents
   */
  label: string;
  link: string;
}

/**
 * Primary UI component for user interaction
 */
export const TopBanner = ({ theme, label, link }: TopBannerProps) => {
  const mode =
    theme === "primary"
      ? "bg-[#CCCCFF] text-[#22223B]"
      : "bg-[#22223B] text-[#CCCCFF]";
  return (
    <div className={`${mode} text-center py-2 font-semibold w-full`}>
      <Link href={link}>
        <p>{label}</p>
      </Link>
    </div>
  );
};
