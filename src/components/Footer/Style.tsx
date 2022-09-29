import React from "react";
import styled from "styled-components";

export const FootWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  margin: 20px;
  padding: 20px;
  padding-top: 200px;
  box-sizing: border-box;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin-top: 84px;
    gap: 20px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MobileFootWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 82px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
