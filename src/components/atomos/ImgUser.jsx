import styled from "styled-components";

export const ImgUser = ({ src, alt }) => {
  return <Img src={src} alt={alt} />;
};

export const Img = styled.img`
  border-radius: 16px;
  width: 150px;
  height: 160px;
  object-fit: cover;
`;
