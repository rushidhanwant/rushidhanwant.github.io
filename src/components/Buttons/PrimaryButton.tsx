import React from "react";
import { StyledPrimaryButton } from "./Style";
import { PrimaryButtonProps } from "./types";

const PrimaryButton = ({
  width,
  height,
  text,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton width={width} height={height} onClick={onClick}>
      {text}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
