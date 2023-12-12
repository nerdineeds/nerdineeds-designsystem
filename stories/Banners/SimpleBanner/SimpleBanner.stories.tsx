// SimpleBanner.stories.tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SimpleBanner from "./SimpleBanner";

// Type annotations can define the component's expected props
export default {
  title: "Banners/SimpleBanner",
  component: SimpleBanner,
} as ComponentMeta<typeof SimpleBanner>;

// Template bind method is a standard way to duplicate the function while preserving its context
const Template: ComponentStory<typeof SimpleBanner> = (args) => (
  <SimpleBanner {...args} />
);

// Default story using the Template with args
export const Default = Template.bind({});
Default.args = {
  highlightText: "7 Days",
  mainText: "Free Demo",
  subText: "No charge for seven days",
  imageUrl: "path/to/your/image.png", // Replace with the actual image path
};
