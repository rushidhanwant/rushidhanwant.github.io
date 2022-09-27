import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { LogoIcon } from "../Icons";
import { NavWrapper } from "./Style";

const Header = () => {
  return (
    <NavWrapper>
      <LogoIcon />
      <PrimaryButton text="Chat with us" />
    </NavWrapper>
  );
};

export default Header;
