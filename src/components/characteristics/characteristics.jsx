import React from "react";
import { P } from "/src/components/styled";

function Characteristics({ product }) {
  return (
    <>
      <P>
        <b>Масса: </b>
        {product.weight}
      </P>
      <P>
        <b>Срок годности: </b>
        {product.expiration}
      </P>
      <P>
        <b>Порода: </b>
        {product.breed}
      </P>
      <P>
        <b>Условия хранения: </b>
        {product.storageConditions}
      </P>
      <P>
        <b>Место происхождения: </b>
        {product.birthplace}
      </P>
    </>
  );
}

export default Characteristics;
