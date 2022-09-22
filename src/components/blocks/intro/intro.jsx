import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { StyledSection, IntroWrapper, Text } from "./styles";

function Intro() {
  return (
    <StyledSection>
      <IntroWrapper>
        <Title size={TitleSize.BIG} level={TitleLevel.H1}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </IntroWrapper>
    </StyledSection>
  );
}

export default Intro;
