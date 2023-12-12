import React from "react";

const CenterNavigation = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <div className="flex space-x-4">
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
            HOME
          </a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
            SERVICES
          </a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
            SERVICES
          </a>
        </div>
        <div>
          {/* Logo placeholder - use an img tag or an SVG component as needed */}
          <a
            href="#"
            className="text-xl font-bold bg-blue-500 px-3 py-2 rounded"
          >
            LOGO
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
            PORTFOLIO
          </a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
            TEMPLATE SHOP
          </a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
            ABOUT
          </a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default CenterNavigation;
