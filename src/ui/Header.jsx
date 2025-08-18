import styled, { css } from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import { respond } from "../styles/mixins";

const StyledHeader = styled.header`
  background-color: var(--color-light-3);
  display: flex;
  align-items: center;
  padding: 0 1rem;

  .container {
    margin-left: auto;

    ${respond.tabPort(css`
      margin-left: 0;
    `)}
  }
  .logout {
    margin-left: 1rem;
  }
`;
function Header() {
  const { user, logout } = useAuth();
  return (
    <StyledHeader>
      <div className="container">
        <span>{user.name}</span>
        <Button onClick={logout} className="logout">
          Logout
        </Button>
      </div>
    </StyledHeader>
  );
}

export default Header;
