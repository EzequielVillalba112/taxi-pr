import styled from "styled-components";

export const Select = ({ name, value, onChange, localidades, label }) => {
  return (
    <Container>
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form__field"
        required
      >
        <option value="">Seleccionar localidad</option>
        {localidades.map((localidad) => (
          <option key={localidad.id} value={localidad.id}>
            {localidad.nombre}
          </option>
        ))}
      </select>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  .form__label {
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #4b4b4b;
    pointer-events: none;
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
    height: 42px;
    &.disabled {
      color: #696969;
      background: #2d2d2d;
      border-radius: 8px;
      margin-top: 8px;
      border-bottom: 1px dashed #656565;
    }
  }
`;
