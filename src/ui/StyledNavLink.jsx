import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavLink = styled(NavLink)`
  ${(props) =>
    props.variation === "regular" &&
    css`
      background-color: var(--color-light-2);
      color: var(--color-dark);

      &:hover {
        background-color: var(--color-dark);
        color: var(--color-light);
      }
    `}
  ${(props) =>
    props.variation === "dark" &&
    css`
      background-color: var(--color-dark);
      color: var(--color-light);

      &:hover {
        background-color: var(--color-light-2);
        color: var(--color-dark);
      }
    `}
  display: inline-block;
  border: none;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: 0.2s all;
`;
StyledNavLink.defaultProps = {
  variation: "regular",
  radius: "rounded",
};
export default StyledNavLink;
