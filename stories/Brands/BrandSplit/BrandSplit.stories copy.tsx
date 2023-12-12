import * as React from "react";
import BrandSplit from "./BrandSplit";
import logo from "./images/light-logo.PNG";

export default { title: "Components/BrandSplit" };

const image = (
  <img
    src="https://images.unsplash.com/photo-1605030753481-bb38b08c384a?&auto=format&fit=crop&w=400&q=80"
    alt="A house in a forest"
    style={{ objectFit: "cover", width: "100%", height: "100%" }}
  />
);

export const Styled = () => (
  <BrandSplit>
    <h1>Default ratio (1/1)</h1>
  </BrandSplit>
);
