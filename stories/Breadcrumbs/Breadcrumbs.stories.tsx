import * as React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { GiRabbitHead } from "react-icons/gi";

export default { title: "Components/Breadcrumbs" };

export const Default = () => <Breadcrumbs icon={true} />;

export const Custom = () => (
  <Breadcrumbs icon={true} iconStyle="custom" customIcon={<GiRabbitHead />} />
);

export const Double = () => <Breadcrumbs icon={true} iconStyle="double" />;

export const Dashed = () => <Breadcrumbs iconStyle="dash" />;

export const Barred = () => <Breadcrumbs iconStyle="bar" />;
