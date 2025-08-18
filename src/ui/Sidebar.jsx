import styled, { css } from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import StyledSidebarNavLink from "./StyledSidebarNavLink";
import { respond } from "../styles/mixins";

const StyledNav = styled.nav`
  background-color: var(--color-light-3);
  grid-row: 1 / -1;

  ${respond.tabPort(css`
    padding-top: 2rem;
  `)}
`;

function Sidebar() {
  const {
    user: { role },
  } = useAuth();
  return (
    <StyledNav>
      {/* Different tabs depending on user's role */}
      {role === "admin" && (
        <>
          <StyledSidebarNavLink to="/teachers">Teachers</StyledSidebarNavLink>
          <StyledSidebarNavLink to="/students">Students</StyledSidebarNavLink>
        </>
      )}
      {role === "teacher" && (
        <>
          <StyledSidebarNavLink to="/teacher/appointments">
            Appointments
          </StyledSidebarNavLink>
        </>
      )}
      {role === "student" && (
        <>
          <StyledSidebarNavLink to="/student/appointments">
            Appointments
          </StyledSidebarNavLink>
          <StyledSidebarNavLink to="/student/bookAppointment">
            Book an appointment
          </StyledSidebarNavLink>
        </>
      )}
    </StyledNav>
  );
}

export default Sidebar;
