import styled from "styled-components";

const StyledOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
function Overlay({ children }) {
  return <StyledOverlay>{children}</StyledOverlay>;
}

export default Overlay;
