import { useScreenSize } from "../../hooks";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const { isTablet } = useScreenSize();

  return <>{isTablet ? <DesktopFooter /> : <MobileFooter />}</>;
};

export default Footer;
