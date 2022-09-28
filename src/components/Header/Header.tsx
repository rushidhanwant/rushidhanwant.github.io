import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { LogoIcon } from "../Icons";
import { NavWrapper } from "./Style";

const Header = () => {
  const openDiscord = () => {
    const discord = "https://discord.gg/MdcjsePm";
    window.open(discord, "_blank");
  };

  return (
    <NavWrapper>
      <LogoIcon width="10%" />
      <PrimaryButton text="Chat with us" onClick={openDiscord} />
    </NavWrapper>
  );
};

export default Header;
