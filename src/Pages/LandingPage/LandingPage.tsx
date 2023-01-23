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
  PastWorkSection, BottomSectionWrapper, TechStackSection, TechStackWrapper,
} from "./Style";
import ShapeContainer from "../../components/ShapeContainer/ShapeContainer";

import Messari from "../../components/Icons/Messari.png";
import Clipto from "../../components/Icons/Clipto.png";
import Macys from "../../components/Icons/Macys.png";
import DevNode from "../../components/Icons/DevNode.png";

import Solidity from "../../components/Icons/Solidity.png";
import Rust from "../../components/Icons/Rust.png";
import Polygon from "../../components/Icons/Polygon.png";
import Ceramic from "../../components/Icons/Ceramic.png";
import Typescript from "../../components/Icons/Typescript.png";

const LandingPage = () => {
  return (
    <>
      <section>
        <HeadingWrapper>
          <Text size="7vw" family="Death Star" weight="400" lineHeight="80vw">
            <span>HEY, WE'RE DMC-12</span>
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

            </span>
          </Text>
        </FunnyTextWrapper>
        <AboutTextWrapper>
          <Text
            size="40px"
            family="Advent Pro"
            weight="700"
            lineHeight="276.04%"
          >
            <span>
              DMC-12 is a collective of software engineers and product heads that provide founders and
              organisations with professional services for web3 application designs, development,
              NFT projects, DAO tooling, and loads more.
            </span>
          </Text>
        </AboutTextWrapper>
      </section>
      <BottomSectionWrapper>
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
                          textPosition="45%"
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
                          textPosition="41%"
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
                          textPosition="45%"
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
                          textPosition="25%"
                      >
              <span>
                PLATFORM <br /> CONSULTING
              </span>
                      </ShapeContainer>
                  </Row>
              </StackWrapper>
          </WorkSection>

          <TechStackSection>
            <TechStackWrapper>
              <Text size="48px" family="Death Star" weight="400" lineHeight="55px">
                <span>Tech Stack</span>
              </Text>
            </TechStackWrapper>
            <CompanyLogo>
              <ImageContainer>
                <img src={Solidity} width="50%" height="auto" />
              </ImageContainer>
              <ImageContainer>
                <img src={Rust} width="100%" height="auto" />
              </ImageContainer>
              <ImageContainer>
                <img src={Typescript} width="50%" height="auto" />
              </ImageContainer>
              <ImageContainer>
                <img src={Polygon} width="50%" height="auto" />
              </ImageContainer>
              <ImageContainer>
                <img src={Ceramic} width="50%" height="auto" />
              </ImageContainer>
            </CompanyLogo>
          </TechStackSection>

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
                    <a href={"https://devnode.network/"} target={"_blank"}>
                      <img src={DevNode} width="60%" height="auto" />
                    </a>
                  </ImageContainer>
                  <ImageContainer>
                      <a href={"https://www.clipto.io/"} target={"_blank"}>
                          <img src={Clipto} width="50%" height="auto" />
                      </a>
                  </ImageContainer>
                  <ImageContainer>
                    <a href={"https://www.macysinc.com/"} target={"_blank"}>
                      <img src={Macys} width="100%" height="auto" />
                    </a>
                  </ImageContainer>
              </CompanyLogo>
          </PastWorkSection>
      </BottomSectionWrapper>
    </>
  );
};
export default LandingPage;
