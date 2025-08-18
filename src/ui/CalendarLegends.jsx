import styled, { css } from "styled-components";

const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-dark);
  ${(props) =>
    css`
      background-color: ${props.color};
    `};
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 1rem 0;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      width: 80px;
    }
  }
`;

function CalendarLegends() {
  return (
    <div>
      <h3>Calendar Legends</h3>
      <StyledList>
        <li>
          <span>Pending: </span>
          <ColorBox color="yellow" />
        </li>
        <li>
          <span>Rejected: </span>
          <ColorBox color="red" />
        </li>
        <li>
          <span>Approved: </span>
          <ColorBox color="green" />
        </li>
      </StyledList>
    </div>
  );
}

export default CalendarLegends;
