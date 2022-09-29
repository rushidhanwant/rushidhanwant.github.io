import { LogoIcon } from "../Icons";
import { DiscordIcon, TwitterIcon, UnknownIcon } from "../Icons/Icons";
import Title from "../Text/Text";
import { FootWrapper, LeftWrapper, RightWrapper, RowWrapper } from "./Style";

const DesktopFooter = () => {
  return (
    <FootWrapper>
      <LeftWrapper>
        <RowWrapper>
          <Title size="64px" weight="400" lineHeight="73.63px">
            <span>DMC-12</span>
          </Title>
          <LogoIcon />
        </RowWrapper>
        <Title
          size="16px"
          weight="400"
          lineHeight="32px"
          style={{ textAlign: "left" }}
        >
          <span>helping build web3</span>
        </Title>
      </LeftWrapper>
      <RightWrapper>
        <Title size="40px" weight="400" lineHeight="46.02px">
          <span>stay connected</span>
        </Title>
        <RowWrapper>
          <TwitterIcon />
          <a href="https://discord.gg/MdcjsePm" target={"_blank"}>
            <DiscordIcon />
          </a>
          <UnknownIcon />
        </RowWrapper>
        <Title
          size="16px"
          weight="400"
          lineHeight="32px"
          style={{ textAlign: "left" }}
        >
          <span>connect@dmc12.com</span>
        </Title>
      </RightWrapper>
    </FootWrapper>
  );
};

export default DesktopFooter;
