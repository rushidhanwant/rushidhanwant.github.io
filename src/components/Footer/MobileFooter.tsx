import { LogoIcon } from "../Icons";
import { DiscordIcon, TwitterIcon, UnknownIcon } from "../Icons/Icons";
import Text from "../Text/Text";
import { MobileFootWrapper, Socials } from "./Style";

const MobileFooter = () => {
  return (
    <MobileFootWrapper>
      <Text size="32px" weight="400" lineHeight="36.02px">
        <span>stay connected</span>
      </Text>
      <Socials>
        <TwitterIcon />
        <a href="https://discord.gg/MdcjsePm" target={"_blank"}>
          <DiscordIcon />
        </a>
        <UnknownIcon />
      </Socials>
      <Text
        size="12px"
        weight="400"
        lineHeight="24px"
        family="Raven Sans NBP"
        style={{ textAlign: "left" }}
      >
        <span>connect@dmc12.com</span>
      </Text>
      <Text
        size="32px"
        weight="400"
        lineHeight="36.63px"
        style={{ marginTop: "84px", marginBottom: "20px" }}
      >
        <span>DMC-12</span>
      </Text>
      <Text
        size="12px"
        weight="400"
        lineHeight="24px"
        family="Raven Sans NBP"
        style={{ textAlign: "left", marginBottom: "50px" }}
      >
        <span>helping build web3</span>
      </Text>
      <LogoIcon width="50%" />
    </MobileFootWrapper>
  );
};

export default MobileFooter;
