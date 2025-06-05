import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  max-width: 50rem;
  background-color: var(--color-light-3);
  padding: 2rem;

  input,
  select {
    padding: 1rem;
    font-size: inherit;
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
