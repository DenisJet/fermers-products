import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, LogoText } from "./styles";

function Logo() {
  return (
    <StyledLogo href="/" className="logo__link">
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
