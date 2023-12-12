// CTABanner.stories.tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CTABanner from "./CTABanner";

// This defines the metadata for the component, including the title and component itself
export default {
  title: "Banners/CTABanner",
  component: CTABanner,
} as ComponentMeta<typeof CTABanner>;

// This is a template that can be reused to create different stories
const Template: ComponentStory<typeof CTABanner> = (args) => (
  <CTABanner {...args} />
);

// Default story
export const Default = Template.bind({});
Default.args = {
  highlightText: "Generate",
  mainText: "Monthly Reports",
  subText:
    "Good customer relationship management is the foundation of modern business. Take care of the development.",
  imageUrl: "artemis-assets/images/saly-group.png", // Replace with the actual image path
};

// You can create more stories below with different states or prop combinations
