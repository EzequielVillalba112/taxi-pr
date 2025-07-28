import styled from "styled-components";

export function InputText({ children, icono }) {
  return (
    <Container>
      <span>{icono}</span>

      <div className="form__group field">{children}</div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    color: #4b4b4b;
  }
  p {
    color: #4b4b4b;
  }
  .form__group {
    padding: 20px 0 0;
    width: 100%;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    transition: background-color 5000s ease-in-out 0s;
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
    &.disabled {
      color: #696969;
      background: #2d2d2d;
      border-radius: 8px;
      margin-top: 8px;
      border-bottom: 1px dashed #656565;
    }
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #4b4b4b;
    pointer-events: none;
  }

  .form__field:focus {
    padding-left: 12px;
    border-width: 1px;
    border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
    top: 0;
    transition: 0.2s;
    font-size: 17px;
    color: #4b4b4b;
  }

  /* reset input */
  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
`;
