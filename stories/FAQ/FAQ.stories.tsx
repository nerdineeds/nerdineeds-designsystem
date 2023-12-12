import * as React from "react";
import { FAQ } from "../FAQ/FAQ";
import { GiRabbitHead } from "react-icons/gi";

export default { title: "Components/FAQ" };

export const Default = () => <FAQ icon={true} />;

export const Custom = () => (
  <FAQ icon={true} iconStyle="custom" customIcon={<GiRabbitHead />} />
);

export const Double = () => <FAQ icon={true} iconStyle="double" />;

export const Dashed = () => <FAQ iconStyle="dash" />;

export const Barred = () => <FAQ iconStyle="bar" />;
