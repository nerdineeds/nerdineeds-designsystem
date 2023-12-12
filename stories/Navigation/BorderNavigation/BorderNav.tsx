import React from "react";

interface BorderNavProps {
  links: Link[];
}

type Link = {
  label?: string;
  name: string;
  href?: string;
};

/**
 * Primary UI component for user interaction
 */
export const BorderNav = ({ links }: BorderNavProps) => {
  // const mode = primary
  //   ? "storybook-button--primary"
  //   : "storybook-button--secondary";
  return (
    <div className="flex flex-col justify-between items-center bg-white shadow">
      <div className="flex items-center py-3">
        <span className="text-blue-600 font-bold text-lg">
          Nerdineeds Digital
        </span>
      </div>
      <div className="border-t-2 border-b-2 border-black w-full flex mx-auto justify-center">
        {links?.map((link, index) => (
          <a
            href="#"
            key={link.name}
            className={
              index === links.length - 1
                ? "text-gray-600 hover:text-gray-900 px-12 border-black border-r-2 border-l-2 py-0.5 text-sm font-mono"
                : "text-gray-600 hover:text-gray-900 px-12 border-black border-l-2 py-0.5 text-sm font-mono"
            }
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
