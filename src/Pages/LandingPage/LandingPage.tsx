import React from "react";
import Text from "../../components/Text/Text";
import { Circle, Triangle, Square, Rectangle } from "../../components/Icons";
import {
  HeadingWrapper,
  FunnyTextWrapper,
  AboutTextWrapper,
  WorkWrapper,
  StackWrapper,
  Row,
  PastWorkWrapper,
  CompanyLogo,
  ImageContainer,
  WorkSection,
  PastWorkSection,
} from "./Style";
import ShapeContainer from "../../components/ShapeContainer/ShapeContainer";

import Messari from "../../components/Icons/Messari.png";
import Clipto from "../../components/Icons/Clipto.png";
import Macys from "../../components/Icons/Macys.png";

const LandingPage = () => {
  return (
    <>
      <section>
        <HeadingWrapper>
          <Text size="7vw" family="Death Star" weight="400" lineHeight="8vw">
            <span>HEY, WE'RE DMC-12</span>
          </Text>
          <Text
            size="1.4vw"
            family="Raven Sans NBP"
            weight="400"
            lineHeight="2.8vw"
          >
            <span>WE’RE HELPING BUILD WEB3</span>
          </Text>
        </HeadingWrapper>
      </section>

      <section>
        <FunnyTextWrapper>
          <Text
            size="20px"
            family="Death Star"
            weight="400"
            lineHeight="23px"
            style={{}}
          >
            <span>
              'I g-guess you guys aren't ready for that yet. But your kids are
              gonna love it'
            </span>
          </Text>
        </FunnyTextWrapper>

        <AboutTextWrapper>
          <Text
            size="16px"
            family="Raven Sans NBP"
            weight="400"
            lineHeight="276.04%"
            style={{}}
          >
            <span>
              DMC-12 collaborates on web3 projects and accelerates their build.
              Whether you're just starting, have built something sweet in web3
              and need some skilful input, or want someone to bounce ideas off,
              you can speak to us.
            </span>
          </Text>
        </AboutTextWrapper>
      </section>

      <WorkSection>
        <WorkWrapper>
          <Text size="48px" family="Death Star" weight="400" lineHeight="55px">
            <span>THING S WE DO</span>
          </Text>
        </WorkWrapper>

        <StackWrapper>
          <Row content="space-around">
            <ShapeContainer
              Shape={<Circle width="80%" />}
              TextProps={{
                size: "36px",
                family: "Death Star",
                weight: "400",
                lineHeight: "41px",
              }}
              type="circle"
            >
              <span>TOKENOMICS</span>
            </ShapeContainer>

            <ShapeContainer
              Shape={<Rectangle width="80%" />}
              TextProps={{
                size: "36px",
                family: "Death Star",
                weight: "400",
                lineHeight: "41px",
              }}
              type="rectangle"
            >
              <span>
                SMART <br /> CONTRACTS
              </span>
            </ShapeContainer>

            <ShapeContainer
              Shape={<Square width="80%" />}
              TextProps={{
                size: "36px",
                family: "Death Star",
                weight: "400",
                lineHeight: "41px",
              }}
              type="square"
            >
              <span>DE-FI</span>
            </ShapeContainer>
          </Row>

          <Row content="center">
            <ShapeContainer
              Shape={<Triangle width="80%" />}
              TextProps={{
                size: "36px",
                family: "Death Star",
                weight: "400",
                lineHeight: "41px",
              }}
              type="triangle"
            >
              <span>
                PLATFORM <br /> CONSULTING
              </span>
            </ShapeContainer>
          </Row>
        </StackWrapper>
      </WorkSection>

      <PastWorkSection>
        <PastWorkWrapper>
          <Text size="48px" family="Death Star" weight="400" lineHeight="55px">
            <span>Stuff we'’ve helped build</span>
          </Text>
        </PastWorkWrapper>
        <CompanyLogo>
          <ImageContainer>
            <a href={"https://messari.io/"} target={"_blank"}>
              <img src={Messari} width="100%" height="auto" />
            </a>
          </ImageContainer>
          <ImageContainer>
            <a href={"https://www.macysinc.com/"} target={"_blank"}>
              <img src={Macys} width="100%" height="auto" />
            </a>
          </ImageContainer>
          <ImageContainer>
            <a href={"https://www.clipto.io/"} target={"_blank"}>
              <img src={Clipto} width="50%" height="auto" />
            </a>
          </ImageContainer>
        </CompanyLogo>
      </PastWorkSection>
    </>
  );
};
export default LandingPage;
