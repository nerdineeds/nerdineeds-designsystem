import * as React from "react";
import { useState } from "react";

interface FAQProps {
  facts: Facts[];
  tagline: string;
  heading: string;
  email?: string;
  theme?: "dark" | "light";
}

type Facts = {
  question: string;
  answer: string;
};

export const FAQ: React.FC<FAQProps> = ({
  facts,
  tagline,
  email,
  heading,
  theme = "dark",
}: FAQProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Function to toggle the FAQ drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <section className="dark:bg-black dark:text-white py-12 md:py-24 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-6xl sm:text-8xl md:text-10xl tracking-tighter mb-12">
          {heading}
        </h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-4/12 px-4 mb-16 lg:mb-0">
            <div className="max-w-xs">
              <p className="text-base text-gray-400">
                <span>{tagline}</span>
                <a
                  className="inline-block text-black hover:underline dark:text-white"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-8/12 px-4">
            <div className="lg:ml-auto mw-3xl">
              {/* <!--Question 2--> */}
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="py-6 px-0 border-t border-black dark:border-white"
                >
                  <div className="flex w-full justify-between items-center">
                    <h5 className="text-lg xs:text-2xl tracking-tight">
                      {fact.question}
                    </h5>
                    {isDrawerOpen ? (
                      <button
                        onClick={toggleDrawer}
                        className="lex-shrink-0 inline-flex ml-4 items-center justify-center w-9 h-9 text-black hover:text-white border border-black hover:bg-black dark:text-white dark:border-white dark:hover:bg-white rounded-full dark:hover:text-black transition duration-150"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewbox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.459 7.51071L9.21179 3.26352L4.9646 7.51071"
                            stroke="currentColor"
                            stroke-width="1.04955"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M9.21094 15.1585L9.21094 3.38249"
                            stroke="currentColor"
                            stroke-width="1.04955"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    ) : (
                      <button
                        onClick={toggleDrawer}
                        className="flex-shrink-0 inline-flex ml-4 items-center justify-center w-9 h-9 text-black hover:text-white border border-black hover:bg-black dark:text-white dark:border-white dark:hover:bg-white rounded-full dark:hover:text-black transition duration-150 "
                      >
                        <svg
                          width="18"
                          height="18"
                          viewbox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.459 10.4893L9.21179 14.7365L4.9646 10.4893"
                            stroke="currentColor"
                            stroke-width="1.04955"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M9.21094 2.84152L9.21094 14.6175"
                            stroke="currentColor"
                            stroke-width="1.04955"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    )}
                  </div>
                  {isDrawerOpen && (
                    <div
                      className={`transition-max-h ease-in-out duration-300 overflow-hidden ${
                        isDrawerOpen ? "max-h-96 mb-16" : "max-h-0"
                      }`}
                    >
                      <p className="max-w-3xl mt-6 text-sm pr-10">
                        {fact.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
