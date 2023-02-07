import styled, { createGlobalStyle } from "styled-components";

export const ProjectPageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 15% 10px;
  @media only screen and (max-width: 768px) {
    & div:nth-child(1) {
      margin: 80% 10px;
      font-size: 40px;
      line-height: 46px;
    }
    & div:nth-child(2) {
      font-size: 10px;
      line-height: 20px;
    }
  }
`;
export const ProjectsMobileTitle = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    padding-top: 100px;
  }
`;

export const ProjectMobileSection = styled.div`
  display: block;
  padding: 20px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: #040217;
`;

export const MobileProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 600px) {
    & div:nth-child(1) {
      font-size: 45px;
    }
  }
`;
