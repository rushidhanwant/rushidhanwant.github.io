import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import {ChatIcon, GithubIcon, LogoIcon} from "../Icons";
import { NavWrapper, MobileHeader, DesktopHeader } from "./Style";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const openMailClient = () => {
    const discord = "mailto:hello@dmc12.xyz";
    window.open(discord, "_blank");
  };

  const openGithub = () => {
    const github = "https://github.com/dmc12-xyz";
    window.open(github, "_blank");
  }

  const openForm = () => {}

  const redirectToHome = () => {
    console.log("here");
    navigate("/");
  }

  return (
    <NavWrapper>
      <MobileHeader>
        <LogoIcon onClick={redirectToHome} width="inherit" height="inherit" />
      </MobileHeader>
      <DesktopHeader>
        <PrimaryButton
          text={"Submit a form"}
          onClick={openForm}
        />
        <PrimaryButton
          text={"Our Github"}
          onClick={openGithub}
          icon={<GithubIcon width={"35px"} height={"35px"} />}
        />
        <PrimaryButton
          text={"Build with us"}
          onClick={openMailClient}
          icon={<ChatIcon width={"35px"} height={"35px"} />}
        />
      </DesktopHeader>
    </NavWrapper>
  );
};

export default Header;
