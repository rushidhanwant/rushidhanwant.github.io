import React from "react";
import { StyledPrimaryButton } from "./Style";
import { PrimaryButtonProps } from "./types";

const PrimaryButton = ({
  width,
  height,
  text,
  onClick,
  icon
}: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton width={width} height={height} onClick={onClick}>
      {text}
      {icon ? icon : null}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
