import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSidebarNavLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  padding: 2rem 1rem;
  color: var(--color-dark);
  text-transform: uppercase;
  font-size: 2rem;
  text-decoration: none;
  transition: 0.2s all;

  &:hover {
    background-color: var(--color-brand-dark-1);
  }

  &.active {
    background-color: var(--color-brand);
    color: var(--color-light);
  }
`;

export default StyledSidebarNavLink;
