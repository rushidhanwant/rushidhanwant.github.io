import React from "react";
import { ButtonWrapper, StyledPrimaryButton } from "./Style";
import { PrimaryButtonProps } from "./types";

const PrimaryButton = ({ width, height, text }: PrimaryButtonProps) => {
  return (
    <ButtonWrapper>
      <StyledPrimaryButton width={width} height={height}>
        {text}
      </StyledPrimaryButton>
    </ButtonWrapper>
  );
};

export default PrimaryButton;
