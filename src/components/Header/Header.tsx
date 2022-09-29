import React from "react";
import { useScreenSize } from "../../hooks";
import PrimaryButton from "../Buttons/PrimaryButton";
import { LogoIcon } from "../Icons";
import { NavWrapper } from "./Style";

const Header = () => {
  const { isMobile } = useScreenSize();

  const openDiscord = () => {
    const discord = "https://discord.gg/MdcjsePm";
    window.open(discord, "_blank");
  };

  return (
    <NavWrapper>
      {isMobile ? <LogoIcon width="66px" height="39px" /> : <LogoIcon />}
      {isMobile ? (
        <PrimaryButton
          width="66px"
          height="35px"
          text={"Chat"}
          onClick={openDiscord}
        />
      ) : (
        <PrimaryButton text={"Chat with us"} onClick={openDiscord} />
      )}
    </NavWrapper>
  );
};

export default Header;
