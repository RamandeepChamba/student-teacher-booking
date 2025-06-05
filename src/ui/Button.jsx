import styled, { css } from "styled-components";

const Button = styled.button`
  ${(props) =>
    props.variation === "regular" &&
    css`
      background-color: var(--color-brand);
      color: var(--color-light);

      &:hover {
        background-color: var(--color-brand-dark-1);
      }
    `}
  ${(props) =>
    props.variation === "success" &&
    css`
      background-color: var(--color-success);
      color: var(--color-light);

      &:hover {
        background-color: var(--color-success-dark);
      }
    `}
  ${(props) =>
    props.variation === "danger" &&
    css`
      background-color: var(--color-danger);
      color: var(--color-light);

      &:hover {
        background-color: var(--color-danger-dark);
      }
    `}
    
    ${(props) =>
    props.radius === "rounded" &&
    css`
      border-radius: 5px;
    `}

  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: 0.2s all;
  font-size: inherit;
`;

Button.defaultProps = {
  variation: "regular",
  radius: "rounded",
};
export default Button;
