import React from "react";
import { StyledPrice } from "./styles";

function Description({ product }) {
  return (
    <>
      <p>{product.description}</p>
      <StyledPrice>
        {product.price} руб. / {product.weight}
      </StyledPrice>
    </>
  );
}

export default Description;
