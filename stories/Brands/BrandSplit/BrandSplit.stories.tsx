import * as React from "react";
import BrandSplit from "./BrandSplit";
import logo from "./light-logo.PNG";

export default { title: "Components/BrandSplit" };

const logos = [logo, logo, logo, logo, logo];

export const Default = () => (
  <BrandSplit
    images={logos}
    testimonial="Now that Basko is here, we&rsquo;ve tossed out all other
  templates, they just can&rsquo;t compete."
    author="jane doe"
    slogan="Join a growing group of satisfied customers who have made the
    switch."
    company="A,B,C Company"
  >
    <h1>Default ratio (1/1)</h1>
  </BrandSplit>
);
