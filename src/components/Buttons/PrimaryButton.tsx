import React from "react";
import { ButtonWrapper, StyledPrimaryButton } from "./Style";
import { PrimaryButtonProps } from "./types";

const PrimaryButton = ({
  width,
  height,
  text,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <ButtonWrapper>
      <StyledPrimaryButton width={width} height={height} onClick={onClick}>
        {text}
      </StyledPrimaryButton>
    </ButtonWrapper>
  );
};

export default PrimaryButton;
