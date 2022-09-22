import React from "react";
import Title, { TitleLevel } from "/src/components/ui/title/title";
import CompareCard from "/src/components/ui/compare-card/compare-card";
import Button from "/src/components/ui/button/button";
import {
  StyledCompare,
  StyledCompareLists,
  FarmerList,
  MagazineList,
  FarmerListItem,
  MagazineListItem
} from "./styles";

function Compare({ cards }) {
  return (
    <StyledCompare>
      {cards?.length ? (
        <>
          <Title level={TitleLevel.H2}>Почему фермерские продукты лучше?</Title>
          <StyledCompareLists>
            <FarmerList>
              {cards
                .filter((card) => card.type === "Фермерские продукты")
                .map((card) => (
                  <FarmerListItem key={card.id}>
                    <CompareCard {...card} />
                  </FarmerListItem>
                ))}
            </FarmerList>
            <MagazineList>
              {cards
                .filter((card) => card.type === "Магазинные продукты")
                .map((card) => (
                  <MagazineListItem key={card.id}>
                    <CompareCard {...card} />
                  </MagazineListItem>
                ))}
            </MagazineList>
          </StyledCompareLists>
          <Button minWidth={260} link="/buy">
            Купить
          </Button>
        </>
      ) : null}
    </StyledCompare>
  );
}

export default Compare;
