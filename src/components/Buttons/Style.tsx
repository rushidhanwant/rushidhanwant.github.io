import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

export const StyledPrimaryButton = styled.button`
  box-sizing: border-box;
  width: ${(props: ButtonProps) => props.width || "224px"};
  height: ${(props: ButtonProps) => props.height || "63px"};
  border: 4px solid #ffffff;
  cursor: pointer;
  color: white;
  font-style: normal;
  text-align: center;
  font-family: "Death Star";
  letter-spacing: 0.05em;
  font-weight: 400;
  font-size: 2rem;
  line-height: 0;
  background-color: rgba(255, 255, 255, .2);
  border-radius: 28px;
  padding: 20px;
  &:hover {
    border: 2px solid #ffffff;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 0px;
    border: 2px solid #ffffff;
  }
`;
