import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";

import { VscQuote } from "react-icons/vsc";

type Testimonial = {
  quote: string;
  author: string;
  position: string;
};

export type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Create pairs of testimonials for each slide
  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push(testimonials.slice(i, i + 2));
  }

  useEffect(() => {
    if (emblaApi) {
      // Add any additional Embla settings or event listeners here
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {testimonialPairs.map((pair, index) => (
          <div className="embla__slide" key={index}>
            {pair.map((testimonial, testimonialIndex) => (
              <div className="testimonial-item" key={testimonialIndex}>
                <VscQuote className="text-6xl opacity-60 absolute left-0 top-0 text-white z-0" />
                <blockquote className="relative z-10 italic">{`"${testimonial.quote}"`}</blockquote>
                <p className="relative z-10 mt-3 text-xs">{`- ${testimonial.author}, ${testimonial.position}`}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
