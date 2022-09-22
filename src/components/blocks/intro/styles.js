import styled from "styled-components";
import { Section } from "/src/components/styled";
import introImage from "/src/assets/intro-image.svg";

export const StyledSection = styled(Section)`
  display: flex;
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 159px;
  padding-bottom: 159px;
  padding-right: 603px;
  background-color: ${(props) => props.theme.colorForBlueBackground};
  align-items: center;
  z-index: 1;
  box-sizing: border-box;

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 273px;
    height: 545px;
    margin: auto;
    background-image: url(${introImage});
  }
`;

export const IntroWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 20px;
  padding-right: 122px;
  margin-bottom: 40px;
`;
