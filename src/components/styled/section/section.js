import styled from "styled-components";

const Section = styled.section`
  display: flex;
  position: relative;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: ${(props) => props.theme.sectionPadding};
  padding-bottom: ${(props) => props.theme.sectionPadding};
  box-sizing: border-box;
`;

export default Section;
