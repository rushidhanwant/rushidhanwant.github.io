import React from "react";
import { useScreenSize } from "../../hooks";
import PrimaryButton from "../Buttons/PrimaryButton";
import { LogoIcon } from "../Icons";
import { NavWrapper, MobileHeader, DesktopHeader } from "./Style";

const Header = () => {
  const { isMobile, isLargeMobile, isTablet } = useScreenSize();

  const openMailClient = () => {
    const discord = "mailto:hello@dmc12.xyz";
    window.open(discord, "_blank");
  };

  return (
    <NavWrapper>
      <MobileHeader>
        <LogoIcon width="inerit" height="inherit" />
      </MobileHeader>
      <DesktopHeader>
        <PrimaryButton
          width="inherit"
          height="inherit"
          text={"Chat"}
          onClick={openMailClient}
        />
      </DesktopHeader>
    </NavWrapper>
  );
};

export default Header;
