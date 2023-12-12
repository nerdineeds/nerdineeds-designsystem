import * as React from "react";
/* -------------------------------------------------------------------------------------------------
 * AspectRatio
 * -----------------------------------------------------------------------------------------------*/

const NAME = "AspectRatio";

interface AspectRatioProps {
  ratio?: number;
}

const AspectRatio = (props) => {
  const { ratio = 1 / 1, style, ...aspectRatioProps } = props;
  return (
    <div
      style={{
        // ensures inner element is contained
        position: "relative",
        // ensures padding bottom trick maths works
        width: "100%",
        paddingBottom: `${100 / ratio}%`,
      }}
      data-radix-aspect-ratio-wrapper=""
    >
      <div
        {...aspectRatioProps}
        style={{
          ...style,
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
    </div>
  );
};

AspectRatio.displayName = NAME;

/* -----------------------------------------------------------------------------------------------*/

export { AspectRatio };
export type { AspectRatioProps };
