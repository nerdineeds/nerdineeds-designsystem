import type { Meta, StoryObj } from "@storybook/react";
import { HoverHeroSection } from "./HoverHeroSection";
import imageTest from "./VM_JAG-II-album-out-now-buy-button.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/HoverHeroSection",
  component: HoverHeroSection,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof HoverHeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "India Solomon Buy NOW",
    theme: "primary",
    link: "/",
    image: imageTest,
  },
};
