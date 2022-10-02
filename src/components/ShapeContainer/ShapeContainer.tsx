import Reawct, { Children } from "react";
import { ShapeWrapper } from "../../Pages/LandingPage/Style";
import Text from "../Text/Text";
interface Props {
  Shape: JSX.Element;
  TextProps: {
    size: string;
    family: string;
    weight: string;
    lineHeight: string;
  };
  children: JSX.Element;
  type: string;
}
const ShapeContainer = (props: Props) => {
  const { children, Shape, TextProps, type } = props;

  const { size, family, weight, lineHeight } = TextProps;
  return (
    <ShapeWrapper>
      {Shape}
      <Text
        size={size}
        family={family}
        weight={weight}
        lineHeight={lineHeight}
        style={{
          position: "absolute",
          width: "100%",
          top: type == "triangle" ? "25%" : "45%",
          margin: "auto",
        }}
      >
        {children}
      </Text>
    </ShapeWrapper>
  );
};

export default ShapeContainer;
