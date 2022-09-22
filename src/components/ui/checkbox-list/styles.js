import styled from "styled-components";

export const StyledLi = styled.li`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  display: block;

  &::before {
    content: "";
    width: 24px;
    height: 24px;
    background-color: ${(props) => (props.$isChecked ? "#FC9B27" : "#f6f6f6")};
    position: absolute;
    top: 0;
    right: 0;
  }
`;
