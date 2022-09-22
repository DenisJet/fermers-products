import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledSection } from "./styles";

function Header() {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav />
    </StyledSection>
  );
}

export default Header;
