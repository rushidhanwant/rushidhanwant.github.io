import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
    width:100%;
    background-image: url("/assets/dmc12-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x:hidden;
    background-size: 100% auto;
  }
`;

const background = styled.div``;
