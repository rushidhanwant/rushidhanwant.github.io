import React from "react";
import Text from "../../components/Text/Text";
import {ThunderIcon, MailIcon, CheckIcon} from "../../components/Icons";
import {
  HeadingWrapper,
  FunnyTextWrapper,
  AboutTextWrapper,
  PastWorkWrapper,
  CompanyLogo,
  ImageContainer,
  PastWorkSection,
  BottomSectionWrapper,
  TechStackSection,
  TechStackWrapper,
  WorkflowSection,
  WorkFlowWrapper,
  CollaborationWrapper, ProjectSection, ProjectWrapper, ProjectListContainer, ProjectContainer, ImageHolder,
} from "./Style";

import Messari from "../../components/Icons/Messari.png";
import Clipto from "../../components/Icons/Clipto.png";
import Macys from "../../components/Icons/Macys.png";
import DevNode from "../../components/Icons/DevNode.png";

import Solidity from "../../components/Icons/Solidity.png";
import Rust from "../../components/Icons/Rust.png";
import Polygon from "../../components/Icons/Polygon.png";
import Ceramic from "../../components/Icons/Ceramic.png";
import Typescript from "../../components/Icons/Typescript.png";
import {CollabCard} from "../../components/Cards/CollabCard";
import {ProjectCard} from "../../components/Cards/ProjectCard";
import {useNavigate} from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate()

  const redirectToDevnode = () => {
    navigate("/devnode", { replace: true });
  }

  const redirectToClipto = () => {
    navigate("/clipto");
  }

  return (
    <>
      <section>
        <HeadingWrapper>
          <Text size="7vw" family="Death Star" weight="400" lineHeight="85vw">
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
        <WorkflowSection>
          <WorkFlowWrapper>
            <Text size="48px" family="Death Star" weight="400" lineHeight="55px" style={{ marginTop: "100px" }}>
              <span>Workflow</span>
            </Text>
            <Text
              size="40px"
              family="Advent Pro"
              weight="700"
              lineHeight="276.04%"
              style={{ marginTop: "83px" }}
            >
              <span>Collaboration is straightforward and easy:</span>
            </Text>
          </WorkFlowWrapper>
          <CollaborationWrapper>
            <CollabCard icon={<ThunderIcon />} text={"Submit a project brief"} />
            <CollabCard icon={<MailIcon />} text={"Receive a proposal from our experienced team"} />
            <CollabCard icon={<CheckIcon />} text={"Review, agree, and pay as we complete your project"} />
          </CollaborationWrapper>

        </WorkflowSection>

        <ProjectSection>
          <ProjectWrapper>
            <Text size="48px" family="Death Star" weight="400" lineHeight="55px" style={{ marginTop: "100px" }}>
              <span>Build fast with dmc-12</span>
            </Text>
          </ProjectWrapper>
          <AboutTextWrapper>
            <Text
              size="40px"
              family="Advent Pro"
              weight="700"
              lineHeight="200.04%"
            >
              <span>
                Over the years we’ve developed building styles that are high quality and rapid.
                From dynamic interfaces to scalable backends, we provide high quality execution at every step.
                Here’s a snapshot of our problem solving skills.
              </span>
            </Text>
          </AboutTextWrapper>

          <ProjectListContainer>
            <ProjectContainer>
              <ImageHolder style={{ backgroundImage: "url('/assets/devnode-screenshot.png')",  backgroundSize: "cover"}}>
                  <div style={{ position: "absolute", bottom: 20, right: 20}}>
                    <ProjectCard
                      onClick={redirectToDevnode}
                      backgroundColor={"#000000"}
                      heading={"GROWING DEVELOPER ECOSYSTEMS"}
                      title={"Devnode"} />
                  </div>
              </ImageHolder>
              <div style={{ width: "588px", textAlign: "left" }}>
                <Text
                  size="24px"
                  family="Inter"
                  weight="700"
                  lineHeight={"29px"}
                >
                  <span>GROWING DEVELOPER ECOSYSTEMS</span>
                </Text>
                <Text
                  size="32px"
                  family="Advent Pro"
                  weight="700"
                  lineHeight={"38px"}
                  style={{ marginTop: "40px" }}
                >
              <span>
                Rapid prototype development. Test your web3 infrastructure ideas and then scale
              </span>
                </Text>
              </div>
            </ProjectContainer>
            <ProjectContainer>
              <div style={{ width: "588px", textAlign: "left" }}>
                <Text
                  size="24px"
                  family="Inter"
                  weight="700"
                  lineHeight={"29px"}
                >
                  <span>NFT MARKET DEVELOPMENT </span>
                </Text>
                <Text
                  size="32px"
                  family="Advent Pro"
                  weight="700"
                  lineHeight={"38px"}
                  style={{ marginTop: "40px" }}
                >
              <span>
                Go from 0 to 1. Build an NFT marketplace that creators and fans love
              </span>
                </Text>
              </div>
              <ImageHolder style={{ backgroundImage: "url('/assets/clipto-screenshot.png')",  backgroundSize: "cover"}}>
                <div style={{ position: "absolute", bottom: 20, right: 20}}>
                  <ProjectCard
                    onClick={redirectToClipto}
                    backgroundColor={"#2C1340"}
                    heading={"NFT MARKET DEVELOPMENT "}
                    title={"CLIPTO"} />
                </div>
              </ImageHolder>
            </ProjectContainer>

          </ProjectListContainer>

        </ProjectSection>

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
