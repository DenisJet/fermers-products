import React from "react";
import Description from "/src/components/description/description";
import Characteristics from "/src/components/characteristics/characteristics";
import Properties from "/src/components/properties/properties";
import Tabs from "/src/components/tabs/tabs";
import { CardWrapper, ProductImage, CardTitle } from "./styles";
import { Img } from "/src/components/styled";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: <Description product={product} />
    },
    {
      title: "Характеристики",
      content: <Characteristics product={product} />
    },
    {
      title: "Свойства",
      content: <Properties product={product} />
    }
  ];

  return (
    <CardWrapper>
      <ProductImage>
        <Img src={product.image} alt={product.name} />
      </ProductImage>
      <div>
        <CardTitle>{product.name}</CardTitle>
        <Tabs tabs={tabs} />
      </div>
    </CardWrapper>
  );
}

export default ProductCard;
