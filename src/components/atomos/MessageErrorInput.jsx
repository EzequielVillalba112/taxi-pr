import styled from "styled-components";

export const MessageErrorInput = ({ label, setError }) => {
  setTimeout(() => {
    setError({estate:false, message:""});
  }, 5000);
  return (
    <LabelError>
      <label>{label}</label>
    </LabelError>
  );
};

const LabelError = styled.div`
  margin-top: 10px;
  label {
    font-size: 17px;
    font-weight: 600;
    color: #a30b0b;
  }
`;
