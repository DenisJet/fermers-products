import styled from "styled-components";
import { P } from "/src/components/styled";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 248px auto;
  column-gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const ProductImage = styled.div`
  width: 248px;
  display: block;
`;

export const CardTitle = styled(P)`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  margin-top: 0;
  margin-bottom: 20px;
`;
