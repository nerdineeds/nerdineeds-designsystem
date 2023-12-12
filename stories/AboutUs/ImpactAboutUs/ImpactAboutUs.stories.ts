import type { Meta, StoryObj } from "@storybook/react";
import { ImpactAboutUs } from "./ImpactAboutUs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "About/ImpactAboutUs",
  component: ImpactAboutUs,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ImpactAboutUs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    heading: "About us",
    subHeading: "Get to know us",
    description: [
      "KW70 Fix is a leading real estate investment firm in the World, headquartered in New York with offices in ",
      "London, Chicago, Barcelona, Vienna, Rome, Las Vegas. ",
      "KW70 Fix initiative seeks out regions and markets with robust underlying catalysts, and expertise to such as burgeoning technology sectors, a diverse workforce, and a strong entrepreneurial culture.",
    ],
    stats: [
      { label: "It is a long established", value: "20+ m²" },
      { label: "It is a long established", value: "500+" },
      { label: "It is a long established", value: "40 000+" },
      { label: "It is a long established", value: "24 700+ m²" },
    ],
    link: {
      url: "#",
      label: "Get to know us",
    },
  },
};
