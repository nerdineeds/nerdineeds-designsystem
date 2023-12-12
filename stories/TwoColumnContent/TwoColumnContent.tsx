import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import "./marquee.css"; // Ensure this contains relevant styles

type Feature = {
  name: string;
  description?: string; // Optional description
};

type PricingInfo = {
  amount: number;
  currency: string;
  period?: string; // Optional period like "per month", "per year", etc.
};

type PaymentPlan = {
  totalPrice: number;
  numberOfPayments: number;
  paymentAmount: number;
};

type TwoColumnContentProps = {
  title: string;
  description: string;
  features: Feature[];
  pricing: PricingInfo;
  ctaLabel: string; // Label for the call to action button
  imageSrc: string; // Path to the image
  imageAlt: string; // Alt text for the image

  timelineWeeks: number;
};

const TwoColumnContent: React.FC<TwoColumnContentProps> = ({
  title,
  description,
  features,
  pricing,
  ctaLabel,
  imageSrc,
  imageAlt,
  timelineWeeks,
}) => {
  function calculatePaymentPlan(totalPrice: number): PaymentPlan {
    const numberOfPayments = 4;
    const paymentAmount = parseFloat(
      (totalPrice / numberOfPayments).toFixed(2)
    );

    return {
      totalPrice,
      numberOfPayments,
      paymentAmount,
    };
  }

  function formatTimeline(weeks: number): string {
    if (weeks < 6) {
      return `${weeks} week${weeks > 1 ? "s" : ""}`;
    } else {
      const months = Math.ceil(weeks / 4);
      return `~${months} month${months > 1 ? "s" : ""}`;
    }
  }

  const paymentPlan = calculatePaymentPlan(pricing.amount);
  const timelineText = formatTimeline(timelineWeeks);
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-white">
      {/* <!-- Left Side: Image Container --> */}
      <div className="md:flex-1 relative">
        {/* <!-- Replace with your actual image path --> */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* <!-- Right Side: Content Container --> */}
      <div className="px-8 py-20 md:flex-1">
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        <p className="mb-6 text-sm">{description}</p>
        <div className="mb-6">
          <h3 className="font-semibold mb-2 uppercase">What's Included:</h3>
          <ul className="list-none space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex flex-col">
                <span className="flex-grow text-sm">{feature.name}</span>
                {feature.description && (
                  <span className="text-xs">{feature.description}</span>
                )}
                <hr className="border-black border w-full mt-1" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-row justify-between text-xs gap-x-4 ">
            <span className="font-semibold whitespace-nowrap">
              INVESTMENT:$
              {pricing.amount}
            </span>{" "}
            |
            <span className="font-semibold whitespace-nowrap">
              4 PAYMENTS OF:$
              {paymentPlan.paymentAmount} EACH
            </span>{" "}
            |{" "}
            <span className="font-semibold whitespace-nowrap">
              TIMELINE: {timelineText}
            </span>
          </div>
        </div>

        <button className="px-6 py-2 bg-black text-white font-semibold rounded shadow-lg hover:bg-opacity-90 transition-colors">
          {ctaLabel}
        </button>
      </div>
    </div>
  );
};

export default TwoColumnContent;
