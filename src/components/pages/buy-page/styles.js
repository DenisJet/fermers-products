import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSection = styled.section`
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  background-color: #f6f6f6;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-top: 40px;
  padding-bottom: 0;
  height: 700px;
  overflow: hidden;
`;

export const StyledSwiper = styled(Swiper)`
  grid-column: -1 / 2;
  height: 600px;
  overflow: hidden;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
