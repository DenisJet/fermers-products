import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import products from "/src/mocks/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import cardList from "/src/mocks/card-list";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage cards={cardList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
