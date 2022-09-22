import React from "react";
import {
  StyledCompareCard,
  CardInfo,
  CardImage,
  CardInfoText,
  CardType,
  CardTitle,
  CardDescription
} from "./styles";

function CompareCard({ image, type, title, text }) {
  return (
    <StyledCompareCard type={type}>
      <CardInfo>
        <CardImage src={image} width={52} height={52} alt={title} />
        <CardInfoText>
          <CardType type={type}>{type}</CardType>
          <CardTitle>{title}</CardTitle>
        </CardInfoText>
      </CardInfo>
      <CardDescription>{text}</CardDescription>
    </StyledCompareCard>
  );
}

export default CompareCard;
