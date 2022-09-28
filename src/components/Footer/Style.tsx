import React from "react";
import styled from "styled-components";

export const FootWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  padding: 22px;
  box-sizing: border-box;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;
