import styled from "styled-components";

export const BtnCircleStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "#ffd500"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.$hoverColor || "#c99c0a"};
  }
`;
