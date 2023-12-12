import type { Meta, StoryObj } from "@storybook/react";
import AboutUsGrid from "./AboutUsGrid";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "About/AboutUsGrid",
  component: AboutUsGrid,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof AboutUsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    mainDescription: [
      "KW70 Fix is a leading real estate investment firm in the World, headquartered in New York with offices in ",
      "KW70 Fix initiative seeks out regions and markets with robust underlying catalysts, such as burgeoning technology sectors, a diverse workforce, and a strong entrepreneurial culture. In those carefully selected markets and locations, we bring capital and expertise to such as burgeoning technology sectors, a diverse workforce, and a strong entrepreneurial culture.",
    ],
    mainHighlight: "London, Chicago, Barcelona, Vienna, Rome, Las Vegas.",
    linkLabel: "Get to know us",
    linkUrl: "#",
    stats: [
      { number: "700+", description: "Clients" },
      { number: "40 000+", description: "Projects" },
      { number: "10 000+", description: "Units sold" },
      { number: "9 999+m²", description: "Designed" },
    ],
  },
};
