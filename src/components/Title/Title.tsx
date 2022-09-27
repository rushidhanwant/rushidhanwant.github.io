import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "./Style";

interface Props {
  size: string;
  weight: string;
  family?: string;
  lineHeight: string;
  style?: any;
  children: JSX.Element;
}

const Title = (props: Props) => {
  const { size, weight, family, lineHeight, style } = props;

  return (
    <StyledTitle
      size={size}
      weight={weight}
      family={family}
      lineHeight={lineHeight}
      style={style}
    >
      {props.children}
    </StyledTitle>
  );
};

export default Title;

Title.proptypes = {
  size: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
};
