import type { Meta, StoryObj } from "@storybook/react";
import { IoCodeSlashOutline } from "react-icons/io5";
import TwoColumnContent from "./TwoColumnContent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/TwoColumnContent",
  component: TwoColumnContent,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof TwoColumnContent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Template Customization",
    description:
      "Make your website truly yours. We make sure that your website reflects your brand identity and captures the attention of your target audience. Choose from one of my templates in my shop and I will customize the website template to match your business needs.",
    features: [
      { name: "Custom branding" },
      { name: "Responsive Design" },
      { name: "SEO Optimization" },
      { name: "Content Integration" },
    ],
    pricing: {
      amount: 2900,
      currency: "USD",
      period: "one-time",
    },
    timelineWeeks: 4,
    ctaLabel: "GET STARTED",
    imageSrc:
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Laptop with a design preview",
  },
};
