import styled, { css } from "styled-components";
import checkbox from "/src/assets/checkbox.svg";

export const StyledForm = styled.form`
  max-height: 100%;
`;

export const StyledDiv = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colorWhite};

  &:first-child {
    margin-bottom: 20px;
  }
`;

export const StyledFormTitle = styled.p`
  margin: 0;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const StyledLi = styled.li`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledInput = styled.input`
  padding: 14px;
  width: 313px;
`;

export const StyledPrice = styled.p`
  font-weight: 700;
  font-size: 27px;
  line-height: 31px;
  margin: 0;
`;

export const PriceWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 32px;
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: block;

  &::before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    right: 0;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkbox});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: #f6f6f6;
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
