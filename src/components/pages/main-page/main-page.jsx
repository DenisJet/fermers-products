import React from "react";
import Intro from "/src/components/blocks/intro/intro";
import Compare from "/src/components/blocks/compare/compare";

function MainPage({ cards }) {
  return (
    <>
      <Intro />
      <Compare cards={cards} />
    </>
  );
}

export default MainPage;
