import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 300px 1fr;
  min-height: 80vh;

  main {
    background-color: var(--color-light-2);
    padding: 5rem;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    min-height: auto;
  }
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
