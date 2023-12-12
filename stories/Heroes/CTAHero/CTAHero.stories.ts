import type { Meta, StoryObj } from "@storybook/react";
import { CTAHero } from "./CTAHero";
import imageTest from "./VM_JAG-II-album-out-now-buy-button.png";

import backgroundImg from "./laura-adai-KPG5nwVPMbo-unsplash.jpg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/CTAHero",
  component: CTAHero,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof CTAHero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "India Solomon Buy NOW",
    theme: "primary",
    link: "/",
    image: backgroundImg,
  },
};
