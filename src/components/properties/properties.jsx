import React from "react";
import { P } from "/src/components/styled";

function Properties({ product }) {
  return (
    <>
      <P>
        <b>Энергетическая ценность: </b>
        {product.energyValue}
      </P>
      <P>
        <b>Пищевая ценность: </b>
        {product.nutritionalValue}
      </P>
    </>
  );
}

export default Properties;
