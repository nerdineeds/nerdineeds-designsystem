import React from "react";

interface CenterCTABannerProps {
  highlightText: string;
  mainText: string;
  subText: string;
  buttonText: string;
  imageUrl: string;
}

const CenterCTABanner: React.FC<CenterCTABannerProps> = ({
  highlightText,
  mainText,
  subText,
  buttonText,
  imageUrl,
}) => {
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        <div
          className="relative py-24 px-16 text-center rounded overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-purple-500 bg-opacity-90"></div>
          <div className="relative">
            <h3 className="mb-2 text-4xl font-medium text-red-300">
              <span className="text-white">{highlightText}</span>
              <span>{mainText}</span>
            </h3>
            <p className="mb-4 text-sm text-blue-100">{subText}</p>
            <a
              className="inline-flex items-center py-2 px-3 rounded text-xs text-white bg-red-500 hover:bg-red-600 rounded"
              href="#"
            >
              {/* SVG omitted for brevity */}
              <span>{buttonText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterCTABanner;
