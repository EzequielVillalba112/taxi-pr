import styled from "styled-components";

export const Btn = ({ text, type, bgcolor, color }) => {
  return (
    <BtnStyle type={type} $bgcolor={bgcolor} $color={color}>
      {text}
    </BtnStyle>
  );
};

const BtnStyle = styled.button`
  background-color: ${({ $bgcolor }) => $bgcolor || "#4b4b4b"};
  color: ${({ $color }) => $color || "#fff"};
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  cursor: pointer;
  transition: ease-in 0.3s;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;


  &:hover {
    scale: 1.05;
  }
`;
