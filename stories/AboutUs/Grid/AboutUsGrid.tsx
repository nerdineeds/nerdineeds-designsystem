import React from "react";

interface AboutUsGridProps {
  mainDescription: string[];
  mainHighlight: string;
  linkLabel: string;
  linkUrl: string;
  stats: Array<{
    number: string;
    description: string;
  }>;
}
const AboutUsGrid: React.FC<AboutUsGridProps> = ({
  mainDescription,
  mainHighlight,
  linkLabel,
  linkUrl,
  stats,
}) => {
  return (
    <section className="py-12 md:py-24 bg-coolGray-50">
      <div className="max-w-4xl px-8 mb-20 mx-auto text-center">
        <p className="text-xl lg:text-2xl tracking-tight mb-10">
          {mainDescription.map((part, index) => (
            <span key={index}>
              {part}
              {index === 1 ? (
                <span className="italic text-coolGray-600">
                  {mainHighlight}
                </span>
              ) : null}
            </span>
          ))}
        </p>
        <a
          className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black"
          href={linkUrl}
        >
          <span className="mr-4">{linkLabel}</span>
          {/* SVG code here */}
        </a>
      </div>
      <div className="max-w-sm mx-auto sm:max-w-none">
        <div className="flex gap-x-2 lg:flex-nowrap md:flex-wrap sm:flex-wrap">
          {stats.map((stat, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div className="flex h-72 items-end pl-8 pr-1 pt-8 pb-12 border rounded-xl">
                <div>
                  <h5 className="text-5xl lg:text-4xl 2xl:text-4xl mb-5">
                    {stat.number}
                  </h5>
                  <span className="block text-coolGray-600">
                    {stat.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ... */}
    </section>
  );
};

export default AboutUsGrid;
