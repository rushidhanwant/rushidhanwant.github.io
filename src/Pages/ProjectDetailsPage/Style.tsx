import styled, { createGlobalStyle } from "styled-components";

export const ParagraphWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 117px;
  margin: 15% 10%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
    gap: 80px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
  margin: 20px 10% 20%;

  @media only screen and (max-width: 768px) {
    gap: 100px;
  }
`;

export const Description = styled.div`
  margin-top: 40px;
  div {
    text-align: left;
  }

  @media only screen and (max-width: 768px) {
    div {
      text-align: center;
    }
  }
`;

export const ProjectTitleSection = styled.section`
  @media only screen and (min-width: 600px) {
    margin-top: 200px;
    margin-bottom: 100px;
  }
  @media only screen and (max-width: 600px) {
    & div:nth-child(1) {
      font-size: 45px;
    }
  }
`;
