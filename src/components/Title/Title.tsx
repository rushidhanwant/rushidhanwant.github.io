import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "./Style";

interface Props {
  size: string;
  weight: string;
  family: string;
  lineHeight: string;
  children: JSX.Element;
}

const Title = (props: Props) => {
  const { size, weight, family, lineHeight } = props;

  return (
    <StyledTitle
      size={size}
      weight={weight}
      family={family}
      lineHeight={lineHeight}
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
