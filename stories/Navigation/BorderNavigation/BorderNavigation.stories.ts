import { BorderNav } from "./BorderNav";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Navigation/BorderNav",
  component: BorderNav,
} satisfies Meta<typeof BorderNav>;

export default meta;
type Story = StoryObj<typeof BorderNav>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const NavLinks = [
  { name: "home", label: "home", href: "/" },
  { name: "work with me", label: "services", href: "/services" },
  { name: "portfolio", label: "portfolio", href: "/portfolio" },
  { name: "book your project", label: "connect", href: "/connect" },
];

export const BorderNavgation: Story = {
  args: {
    links: NavLinks,
  },
};
