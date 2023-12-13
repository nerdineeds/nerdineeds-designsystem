import * as React from "react";
import { ProductCard } from "./ProductCard";
import { GiRabbitHead } from "react-icons/gi";
import cd from "./cdimage.png";

export default { title: "Components/ProductCard" };

export const Default = () => (
  <ProductCard
    productImageUrl={cd}
    title="Signed CDs"
    subtitle="Chemistry"
    buttonText="Buy Now"
    link="#"
  />
);
