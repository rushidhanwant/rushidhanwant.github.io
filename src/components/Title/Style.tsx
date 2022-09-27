import React from "react";
import styled from "styled-components";

interface props {
  size?: string;
  weight?: string;
  family?: string;
  lineHeight?: string;
  color?: string;
  text?: string;
}

export const StyledTitle = styled.div`
  font-family: ${(props: props) =>
    props.family ? props.family : "Death Star"};
  font-style: normal;
  font-weight: ${(props: props) => (props.weight ? props.weight : "400")};
  font-size: ${(props: props) => (props.size ? props.size : "100px")};
  line-height: ${(props: props) =>
    props.lineHeight ? props.lineHeight : "115px"};
  text-align: center;
  color: ${(props: props) => (props.color ? props.color : "#ffffff")};
`;
