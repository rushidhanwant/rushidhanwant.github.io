import React from "react";
import { IconProps } from "./types";

const Triangle = ({
  width = "428",
  height = "476",
  classes = "",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 432 395"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M228.267 386.619C222.948 396.29 209.052 396.29 203.733 386.619L3.06827 21.7465C-2.06302 12.4162 4.68726 1 15.3355 1L416.665 1C427.313 1 434.063 12.4161 428.932 21.7465L228.267 386.619Z"
        fill="#171538"
        stroke="#BF54C7"
        strokeWidth="2"
      />
      <path
        d="M233.863 343.346C226.771 357.007 207.229 357.007 200.137 343.346L47.7245 49.7542C41.1585 37.1063 50.3369 22 64.5876 22L369.412 22C383.663 22 392.841 37.1063 386.276 49.7542L233.863 343.346Z"
        fill="#171538"
        stroke="#D94067"
        strokeWidth="2"
      />
    </svg>
  );
};

export { Triangle };
