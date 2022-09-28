import React from "react";
import PropTypes from "prop-types";
import { StyledText } from "./Style";

interface Props {
  size: string;
  weight: string;
  family?: string;
  lineHeight: string;
  style?: any;
  children: JSX.Element;
}

const Text = (props: Props) => {
  const { size, weight, family, lineHeight, style } = props;

  return (
    <StyledText
      size={size}
      weight={weight}
      family={family}
      lineHeight={lineHeight}
      style={style}
    >
      {props.children}
    </StyledText>
  );
};

export default Text;

Text.proptypes = {
  size: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
};
