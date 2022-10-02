import { LogoIcon } from "../Icons";
import { DiscordIcon, TwitterIcon, UnknownIcon } from "../Icons/Icons";
import Text from "../Text/Text";
import { FootWrapper, LeftWrapper, RightWrapper, RowWrapper } from "./Style";

const DesktopFooter = () => {
  return (
    <FootWrapper>
      <LeftWrapper>
        <RowWrapper>
          <Text size="64px" weight="400" lineHeight="73.63px">
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
          <TwitterIcon />
          <a href="https://discord.gg/MdcjsePm" target={"_blank"}>
            <DiscordIcon />
          </a>
          <UnknownIcon />
        </RowWrapper>
        <Text
          size="16px"
          weight="400"
          family="Raven Sans NBP"
          lineHeight="32px"
          style={{ textAlign: "left" }}
        >
          <span>connect@dmc12.com</span>
        </Text>
      </RightWrapper>
    </FootWrapper>
  );
};

export default DesktopFooter;
