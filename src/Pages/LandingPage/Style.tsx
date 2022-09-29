import React from "react";
import styled from "styled-components";

interface Content {
  content: "space-between" | "center" | "space-around";
}
export const HeadingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  margin: 7% 10px;
`;

export const FunnyTextWrapper = styled.div`
  width: 100%;
  margin-top: 88%;
`;

export const AboutTextWrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 15%;
`;

export const WorkWrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 10%;
  padding-bottom: 50px;
`;

export const StackWrapper = styled.div`
  width: 100%;
  height: 30%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${(props: Content) => props.content || "center"};
  align-items: center;
  text-align: center;
`;

export const ShapeWrapper = styled.div`
  position: relative;
`;

export const PastWorkWrapper = styled.div`
  width: 100%;
  padding: 80px;
  box-sizing: border-box;
`;

export const CompanyLogo = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const ImageContainer = styled.div`
  display: inline-block;
  width: 20%;
  height: auto;
`;
