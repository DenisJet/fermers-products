import styled from "styled-components";
import { Img } from "/src/components/styled";

export const StyledCompareCard = styled.article`
  display: flex;
  height: 197px;
  flex-direction: column;
  padding: ${(props) => props.theme.indent};
  font-size: 18px;
  line-height: 27px;
  vertical-align: top;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.type === "Фермерские продукты"
      ? props.theme.farmerListItemBackgroundcolor
      : props.theme.magazineListItemBackgroundcolor};
`;

export const CardInfo = styled.div`
  margin-bottom: ${(props) => props.theme.indent};
  display: flex;
`;

export const CardImage = styled(Img)``;

export const CardInfoText = styled.div`
  margin-left: ${(props) => props.theme.indent};
`;

export const CardType = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeightDefault};
  font-size: 14px;
  line-height: 21px;
  padding: 2px 10px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.type === "Фермерские продукты"
      ? props.theme.farmerListItemTypeBackgroundcolor
      : props.theme.magazineListItemTypeBackgroundcolor};
`;

export const CardTitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.colorBlack};
  margin: 0;
`;

export const CardDescription = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.colorBlack};
  margin: 0;
`;
