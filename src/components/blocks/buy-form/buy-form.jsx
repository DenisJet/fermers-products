import React, { useState } from "react";
import { Ul, P, VisuallyHiddenInput } from "/src/components/styled";
import Button from "/src/components/ui/button/button";
import {
  StyledForm,
  StyledDiv,
  StyledFormTitle,
  StyledLi,
  StyledInput,
  StyledPrice,
  PriceWrapper,
  StyledLabel
} from "./styles";

function BuyForm({ products, onChange, onClick }) {
  const [totalPrice, setTotalPrise] = useState(0);
  const [checked, setChecked] = useState([]);
  const [address, setAddress] = useState("");

  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
              Вы заказали: ${checkedProducts}.
              Адрес доставки ${address}.
              Цена заказа: ${totalPrice} руб.`
    );
  };

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.name];
    } else {
      updatedList.splice(checked.indexOf(event.target.name), 1);
    }
    setChecked(updatedList);
    onChange(updatedList);
  };

  const isChecked = (item) => (checked.includes(item) ? true : false);

  const checkedProducts = checked.length ? checked.join() : "";

  const getClickedProduct = (event) => {
    onClick(event.target.value);
  };

  return (
    <StyledForm>
      <StyledDiv>
        <StyledFormTitle>Выберите продукты</StyledFormTitle>
        <Ul>
          {products &&
            products.length &&
            products.map((product) => (
              <StyledLi key={product.id}>
                <StyledLabel
                  $isChecked={isChecked(product.name)}
                  onClick={getClickedProduct}
                >
                  {product.name}
                  <VisuallyHiddenInput
                    type="checkbox"
                    name={product.name}
                    value={product.name}
                    onChange={handleCheck}
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
      </StyledDiv>
      <StyledDiv>
        <label>
          <StyledFormTitle>Сделать заказ</StyledFormTitle>
          <StyledInput
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
        </label>
        <PriceWrapper>
          <P>Цена</P>
          <StyledPrice>{totalPrice}</StyledPrice>
        </PriceWrapper>
        <Button
          minWidth={313}
          onClick={handleBuy}
          disabled={!(checked.length && address.length)}
        >
          Купить
        </Button>
      </StyledDiv>
    </StyledForm>
  );
}

export default BuyForm;
