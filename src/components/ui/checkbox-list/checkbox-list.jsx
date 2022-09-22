import React from "react";
import { VisuallyHiddenInput, Ul } from "/src/components/styled";
import { StyledLi, StyledLabel } from "./styles";

function CheckboxList({ selectValues, products, onChange }) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul>
      {products &&
        products.length &&
        products.map((product) => (
          <StyledLi key={product.id}>
            <StyledLabel $isChecked={checked}>
              {product.name}
              <VisuallyHiddenInput
                type="checkbox"
                name={product.name}
                value={product.name}
                onClick={(el) =>
                  el.target.checked
                    ? setTotalPrise(totalPrice + product.price)
                    : setTotalPrise(totalPrice - product.price)
                }
              />
            </StyledLabel>
          </StyledLi>
        ))}
    </Ul>
  );
}

export default CheckboxList;
