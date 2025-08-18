import { Outlet } from "react-router-dom";
import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { respond } from "../styles/mixins";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 300px 1fr;
  min-height: 80vh;
  max-height: 80vh;
  min-width: 1200px;

  main {
    background-color: var(--color-light-2);
    padding: 5rem;
    overflow-x: auto;

    ${respond.tabLand(css`
      padding: 1rem;
      padding-top: 5rem;
    `)}
  }

  ${respond.tabLand(css`
    min-width: 600px;
    min-height: 100vh;
    max-height: auto;
  `)}

  ${respond.tabPort(css`
    display: flex;
    flex-direction: column;
    min-height: auto;
    min-width: 100%;
  `)}
`;
function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Sidebar />
      <main>{<Outlet />}</main>
    </StyledLayout>
  );
}

export default AppLayout;
