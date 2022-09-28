import React from "react";
import { IconProps } from "./types";

const Square = ({ width = "349", height = "294", classes = "" }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 349 294"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="347"
        height="292"
        rx="27"
        fill="#171538"
        stroke="#BF54C7"
        stroke-width="2"
      />
      <rect
        x="22"
        y="24"
        width="304"
        height="245"
        rx="19"
        stroke="#D94067"
        stroke-width="2"
      />
    </svg>
  );
};

export { Square };
