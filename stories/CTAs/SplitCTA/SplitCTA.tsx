import React from "react";

// Define the types for your component props
type SplitCTAProps = {
  title: string;
  subTitle: string;
  description: string[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
};

// Define your component using the types
const SplitCTA: React.FC<SplitCTAProps> = ({
  title,
  subTitle,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Column for the Image */}
      <div className="md:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Column for the Content */}
      <div className="md:w-1/2 bg-white p-8">
        <div className="space-y-6">
          <div className="text-sm uppercase tracking-widest text-gray-500">
            {subTitle}
          </div>
          <h2 className="text-5xl font-bold">{title}</h2>
          {description.map((paragraph, index) => (
            <p key={index} className="text-gray-700">
              {paragraph}
            </p>
          ))}
          <button className="bg-black text-white py-3 px-6 uppercase tracking-wider font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitCTA;
