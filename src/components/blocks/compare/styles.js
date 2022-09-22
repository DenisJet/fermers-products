import styled from "styled-components";
import { Li, Ul, Section } from "/src/components/styled";

export const StyledCompare = styled(Section)`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: ${(props) => props.theme.sectionPadding};
  padding-bottom: ${(props) => props.theme.sectionPadding};
  background-color: ${(props) => props.theme.colorWhite};
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
`;

export const StyledCompareLists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  margin-top: 44px;
  margin-bottom: 44px;
`;
export const FarmerList = styled(Ul)``;

export const MagazineList = styled(Ul)``;

export const FarmerListItem = styled(Li)`
  margin-bottom: 20px;
`;

export const MagazineListItem = styled(Li)`
  margin-bottom: 20px;
`;
