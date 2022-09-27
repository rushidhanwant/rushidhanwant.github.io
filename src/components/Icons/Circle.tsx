import React from "react";
import { IconProps } from "./types";

const Circle = ({ width = "350", height = "350", classes = "" }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 350 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="175"
        cy="175"
        r="174"
        fill="#171538"
        stroke="#BF54C7"
        stroke-width="2"
      />
      <circle
        cx="174.5"
        cy="175.5"
        r="161.5"
        stroke="#D94067"
        stroke-width="2"
      />
    </svg>
  );
};

export { Circle };
