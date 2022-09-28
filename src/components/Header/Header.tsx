import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { LogoIcon } from "../Icons";
import { NavWrapper } from "./Style";

const Header = () => {
  return (
    <NavWrapper>
      <LogoIcon width="10%" height="auto" />
      <PrimaryButton text="Chat with us" />
    </NavWrapper>
  );
};

export default Header;
