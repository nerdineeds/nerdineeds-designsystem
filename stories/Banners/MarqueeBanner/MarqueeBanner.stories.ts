import type { Meta, StoryObj } from "@storybook/react";
import { IoCodeSlashOutline } from "react-icons/io5";
import MarqueeBanner from "./MarqueeBanner";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Banners/MarqueeBanner",
  component: MarqueeBanner,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof MarqueeBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: "MODERN, MINIMAL, AND EFFORTLESSLY CHIC WEB DESIGN",
    Icon: IoCodeSlashOutline,
    repeatCount: 3,
  },
};
