import styled from "styled-components";

export const ButtonTitle = styled.button`
  padding: 8px 12px;
  background-color: ${(props) => (props.active ? "#88AA4D" : "#F6F6F6")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#333333")};
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  box-shadow: none;
  margin-right: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 21px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 0;
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.div`
  font-size: 14px;
  line-height: 21px;
`;
