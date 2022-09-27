import React from "react";
import { IconProps } from "./types";

const Rectangle = ({
  width = "349",
  height = "249",
  classes = "",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 349 483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="347"
        height="481"
        rx="27"
        fill="#171538"
        stroke="#BF54C7"
        stroke-width="2"
      />
      <rect
        x="24"
        y="22"
        width="304"
        height="440"
        rx="19"
        stroke="#D94067"
        stroke-width="2"
      />
    </svg>
  );
};

export { Rectangle };
