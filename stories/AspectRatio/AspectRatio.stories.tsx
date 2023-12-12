import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./AspectRatio";
import Image from "next/image";

const image = (
  <Image
    src="https://images.unsplash.com/photo-1605030753481-bb38b08c384a?&auto=format&fit=crop&w=400&q=80"
    alt="A house in a forest"
    style={{ objectFit: "cover", width: "100%", height: "100%" }}
    fill
  />
);

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/AspectRatio",
  component: AspectRatio,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof AspectRatio>;

export default meta;

export const CustomRatios = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div style={{ width: 200 }}>
        <AspectRatio ratio={1 / 2}>{image}</AspectRatio>
      </div>
      <div style={{ width: 200 }}>
        <AspectRatio>{image}</AspectRatio>
      </div>
      <div style={{ width: 200 }}>
        <AspectRatio ratio={16 / 9}>{image}</AspectRatio>
      </div>
      <div style={{ width: 200 }}>
        <AspectRatio ratio={2 / 1}>{image}</AspectRatio>
      </div>
    </div>
  );
};

export const Styled = () => (
  <div style={{ width: 500 }}>
    <AspectRatio
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "$red",
        color: "white",
      }}
    >
      <h1>
        Default ratio (1/1)
        {image}
      </h1>
    </AspectRatio>
  </div>
);
