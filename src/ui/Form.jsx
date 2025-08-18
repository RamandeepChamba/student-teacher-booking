import styled, { css } from "styled-components";
import { respond } from "../styles/mixins";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 40rem;
  max-width: 80rem;
  /* background-color: var(--color-light-3); */
  background-color: var(--color-light);
  padding: 4rem;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);

  ${respond.phone(css`
    width: 100%;
    padding: 3rem;
    box-shadow: none;
  `)}

  input,
  select {
    padding: 1rem;
    font-size: inherit;

    ${respond.phone(css`
      /* padding: 2rem; */
    `)}
  }

  input {
    outline: 1px solid transparent;
    border: 2px solid transparent;
    border-bottom-color: var(--color-light-3);

    background-color: var(--color-light-2);

    transition: 0.2s all;

    &:focus {
      border-bottom-color: var(--color-brand);
    }
  }
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

function Form({ children, onSubmit }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}

function FormGroup({ children }) {
  return <StyledFormGroup>{children}</StyledFormGroup>;
}

Form.Group = FormGroup;

export default Form;
