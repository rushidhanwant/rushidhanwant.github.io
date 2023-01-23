import styled from "styled-components";

export const CollabCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  padding: 46px 62px;
  
  max-width: 300px;
  height: 450px;
  border: 7px solid #FBFBFB;
  border-radius: 28px;

  font-family: 'Advent Pro',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  text-align: center;
  color: #FFFFFF;
`;

export const ProjectCardWrapper = styled.div.attrs((props: { color: string }) => props)`
  width: 250px;
  height: 180px;
  padding: 25px;
  background: ${(props) => props.color };
  border-radius: 28px;
`;
