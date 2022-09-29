import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
    width:100%;
    margin:0;
    padding:0;
    overflow-x: hidden;
    background-color:#09032B;
    background-image: url("/assets/dmc12-background.png");
    background-repeat: no-repeat;
    background-size: cover;
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
  height: auto;
`;

export const ContentWrapper = styled.section`
  position: relative;
  z-index: 0;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: auto;
`;

export const MainSection = styled.section`
  position: relative;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
`;
