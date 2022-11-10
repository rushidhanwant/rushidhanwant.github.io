import { LogoIcon } from "../Icons";
import { DiscordIcon, TwitterIcon, UnknownIcon } from "../Icons/Icons";
import Text from "../Text/Text";
import { FootWrapper, LeftWrapper, RightWrapper, RowWrapper } from "./Style";

const DesktopFooter = () => {
  return (
    <FootWrapper>
      <LeftWrapper>
        <RowWrapper>
          <Text
            size="64px"
            weight="400"
            lineHeight="73.63px"
            style={{ marginRight: "20px" }}
          >
            <span>DMC-12</span>
          </Text>
          <LogoIcon />
        </RowWrapper>
        <Text
          size="16px"
          weight="400"
          family="Raven Sans NBP"
          lineHeight="32px"
          style={{ textAlign: "left" }}
        >
          <span>helping build web3</span>
        </Text>
      </LeftWrapper>
      <RightWrapper>
        <Text size="40px" weight="400" lineHeight="46.02px">
          <span>stay connected</span>
        </Text>
        <RowWrapper>
          <a style={{display: "table-cell"}} href="https://twitter.com/hidmc12" target="_blank"><TwitterIcon /></a>
          <UnknownIcon />
        </RowWrapper>
        <Text
          size="16px"
          weight="400"
          family="Raven Sans NBP"
          lineHeight="32px"
          style={{ textAlign: "left" }}
        >
          <span>hello@dmc12.xyz</span>
        </Text>
      </RightWrapper>
    </FootWrapper>
  );
};

export default DesktopFooter;
