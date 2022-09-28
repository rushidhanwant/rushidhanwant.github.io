import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
    width:100%;
    margin:0;
    padding:0;
    overflow-x: hidden;
  }
  body {
    height:100%;
    width:100%;
    margin:0;
    padding:0;
  }
`;

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.section`
  position: absolute;
  z-index: 0;
`;

export const MainSection = styled.section`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
`;
