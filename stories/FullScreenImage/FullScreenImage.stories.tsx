import type { Meta, StoryObj } from "@storybook/react";
import { IoCodeSlashOutline } from "react-icons/io5";
import FullScreenImage from "./FullScreenImage";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Navigation/FullScreenImage",
  component: FullScreenImage,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof FullScreenImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Custom Website Project",
    subTitle: "Let's work together",
    description: [
      "Our Custom Website Design package is carefully crafted to meet our clients' unique needs. We start with an in-depth inquiry call to listen to our clients, understand their goals, and uncover their pain points.",
      "Based on this valuable insight, our team curates a package that includes the necessary custom website pages and additional add-ons to enhance the website's impact. These add-ons include email marketing capabilities, sales funnel development, and professional copywriting services.",
      "We take a comprehensive approach to ensure that every aspect of the website is tailored for exceptional results. Our clients can trust that their website will meet their requirements and reflect their vision and objectives.",
      "Partner with us for a custom website design package that exceeds expectations, providing a captivating online presence to drive your business forward.",
    ],
    buttonText: "Girl, I need this!",
    imageSrc:
      "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "A descriptive alt text for the image",
  },
};
