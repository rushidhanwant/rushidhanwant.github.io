import React from "react";
import { useScreenSize } from "../../hooks";
import PrimaryButton from "../Buttons/PrimaryButton";
import { LogoIcon } from "../Icons";
import { NavWrapper } from "./Style";

const Header = () => {
  const { isMobile, isLargeMobile, isTablet } = useScreenSize();

  const openMailClient = () => {
    const discord = "mailto:hi@dmc12.com";
    window.open(discord, "_blank");
  };

  return (
    <NavWrapper>
      {(isMobile || isLargeMobile) && !isTablet ? (
        <LogoIcon width="66px" height="39px" />
      ) : (
        <LogoIcon width="12.7vw" />
      )}

      <div>
        {(isMobile || isLargeMobile) && !isTablet ? (
          <PrimaryButton
            width="auto"
            height="auto"
            text={"Chat"}
            onClick={openMailClient}
          />
        ) : (
          <PrimaryButton
            width="auto"
            text={"Chat with us"}
            onClick={openMailClient}
          />
        )}
      </div>
    </NavWrapper>
  );
};

export default Header;
