import styled, { css } from "styled-components";
import { respond } from "../styles/mixins";

const Table = styled.div`
  display: grid;
  ${(props) => css`
    grid-template-columns: repeat(${props.$numCols}, 1fr);
  `}
  margin-top: 5rem;
  max-width: 100%;
  border: 1px solid #ccc;
  overflow: auto;

  .row {
    display: contents;

    /* Cells */
    & > div {
      padding: 1rem;
      border: 0.5px solid #ccc;
      display: flex;
      align-items: center;
      /* overflow: auto; */

      ${respond.phone(css`
        /* padding: 0; */
      `)}
    }
  }
  .header {
    font-weight: bold;
  }
`;
export default Table;
