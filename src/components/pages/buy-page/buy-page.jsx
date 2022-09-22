import React, { useState } from "react";
import { StyledSection } from "./styles";
import BuyForm from "/src/components/blocks/buy-form/buy-form";
import ProductCard from "/src/components/ui/product-card/product-card";
import { StyledSwiper } from "./styles";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function BuyPage({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [checkedList, setCheckedList] = useState([]);

  const getClickedSlide = (value) => {
    let index = products.findIndex((product) => product.name === value);
    if (!checkedList.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const updateList = (checkedList) => {
    setCheckedList(checkedList);
  };

  return products && products.length ? (
    <StyledSection>
      <BuyForm
        products={products}
        onChange={updateList}
        onClick={getClickedSlide}
      />
      <StyledSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledSection>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default BuyPage;
