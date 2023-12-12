import type { Meta, StoryObj } from "@storybook/react";
import { SidebarNav } from "./SidebarNav";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Navigation/SidebarNav",
  component: SidebarNav,
} satisfies Meta<typeof SidebarNav>;

export default meta;
type Story = StoryObj<typeof SidebarNav>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const NavLinks = [
  { name: "home", label: "home", href: "/" },
  { name: "tour", label: "services", href: "/services" },
  { name: "music", label: "music", href: "/music" },
  { name: "shop", label: "connect", href: "/connect" },
];

export const SidebarNavigation: Story = {
  args: {
    links: NavLinks,
  },
};
