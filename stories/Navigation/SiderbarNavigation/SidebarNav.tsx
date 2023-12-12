import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";
interface SidebarNavProps {
  links: Array<{
    name: string;
    href: string;
  }>;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <RxHamburgerMenu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform ease-in-out transition-all duration-300 border-r-2 border-black${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon inside sidebar */}
        <div className="flex justify-end p-2">
          <button onClick={() => setIsOpen(false)} className="p-2">
            <RxHamburgerMenu className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col p-4">
          {links.map((link) => (
            <li key={link.name} className="mb-4">
              <a
                href={link.href}
                className="text-gray-700 text-3xl hover:text-gray-900 uppercase"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
