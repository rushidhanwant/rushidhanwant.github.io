import { useScreenSize } from "../../hooks";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const { isTablet } = useScreenSize();

  return (
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Footer;
