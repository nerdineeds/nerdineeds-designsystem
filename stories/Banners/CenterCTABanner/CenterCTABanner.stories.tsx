// CenterCTABanner.stories.tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CenterCTABanner from "./CenterCTABanner";

export default {
  title: "Banners/CenterCTABanner",
  component: CenterCTABanner,
} as ComponentMeta<typeof CenterCTABanner>;

const Template: ComponentStory<typeof CenterCTABanner> = (args) => (
  <CenterCTABanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  highlightText: "Generate",
  mainText: "Monthly Reports",
  subText:
    "Good customer relationship management is the foundation of modern business. Take care of the development.",
  buttonText: "Add New Report",
  imageUrl: "artemis-assets/images/saly.png", // Replace with the actual image path
};
