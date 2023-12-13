import * as React from "react";
import { FeaturedProductRow } from "./FeaturedProductRow";
import cd from "./cdimage.png";

export default { title: "Components/FeaturedProductRow" };

const productsData = {
  heading: "merch",
  cta_label: "visit store",
  cta_link: "#",
  products: [
    {
      productImageUrl: cd,
      title: "Signed CDs",
      subtitle: "Chemistry",
      buttonText: "Buy Now",
      link: "#",
    },
    {
      productImageUrl: cd,
      title: "Signed CDs",
      subtitle: "Chemistry",
      buttonText: "Buy Now",
      link: "#",
    },
    {
      productImageUrl: cd,
      title: "Signed CDs",
      subtitle: "Chemistry",
      buttonText: "Buy Now",
      link: "#",
    },
  ],
};

export const Default = () => <FeaturedProductRow {...productsData} />;
