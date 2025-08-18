import styled, { css } from "styled-components";
import { respond } from "../styles/mixins";

const StyledRadios = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  ${respond.phone(css`
    gap: 1rem;
    flex-direction: column;
  `)}
  .group {
    display: flex;
    align-items: center;
  }

  input {
    visibility: hidden;
    width: 0;
    height: 0;

    & + label {
      display: flex;
      align-items: center;
      width: min-content;

      &::after {
        content: "";
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-left: 1rem;
        border-radius: 50%;
        transition: 0.2s all;
        outline: 2px solid var(--color-brand);
        outline-offset: 2px;
      }
    }

    &:checked + label {
      &::after {
        background-color: var(--color-brand);
      }
    }
  }
`;

// input:radio + label
function Radios({ children }) {
  return <StyledRadios>{children}</StyledRadios>;
}

export default Radios;
