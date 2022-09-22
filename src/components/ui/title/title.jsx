import React from "react";
import { StyledTitle } from "./styles";

export const TitleSize = {
  BIG: "big",
  DEFAULT: ""
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3"
};

function Title({ level = 1, children, size, className }) {
  return (
    <StyledTitle as={`h${level}`} $size={size} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
