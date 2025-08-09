import styled from "styled-components";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function InputText({ children, icono }) {
  return (
    <Container>
      {icono && <span>{icono}</span>}
      <div className="form__group field">{children}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;

  input {
    color: #4b4b4b;
  }

  p {
    color: #4b4b4b;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    padding: 20px 0 0;
    width: 100%;
  }

  .form__field {
    width: -webkit-fill-available;
    border-radius: 8px;
    border: none;
    background-color: #fff;
    color: #4b4b4b;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.5px;
    padding-left: 12px;
    height: 40px;
  }

  .form__field::placeholder {
    color: #656565;
  }

  .form__label {
    font-size: 17px;
    color: #4b4b4b;
  }

  .password-wrapper {
    display: flex;
    width: 100%;
    align-items: self-end;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px
  }

 
  .password-wrapper .toggle-password {
    right: 10px;
    top: 50%;
    transform: translateY(-35%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #4b4b4b;
    padding-right: 4px;
  }

  .password-wrapper .toggle-password:hover {
    color: #000;
  }
`;
