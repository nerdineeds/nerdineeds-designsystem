import type { Meta, StoryObj } from "@storybook/react";
import TestimonialCarousel from "./TestimonialCarousel";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/TestimonialCarousel",
  component: TestimonialCarousel,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof TestimonialCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    testimonials: [
      {
        quote:
          "Love the design! Thank you so much you are seriously so amazing, super grateful for you!",
        author: "Michelle",
        position: "MLKMedia agency",
      },
      {
        quote:
          "This looks SO good! Wow way better than what I would have done. Thank you for this.",
        author: "Katie Stewart",
        position: "Acne nutritionist",
      },
      {
        quote:
          "Love the design! Thank you so much you are seriously so amazing, super grateful for you!",
        author: "Michelle",
        position: "MLKMedia agency",
      },
    ],
  },
};
