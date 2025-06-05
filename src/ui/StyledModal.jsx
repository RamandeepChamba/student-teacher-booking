import styled from "styled-components";

const StyledModal = styled.div`
  position: relative;
  background-color: #ccc;
  & > button {
    position: absolute;
    top: 0;
    left: 100%;
    transform: translateY(-100%);
  }
`;

export default StyledModal;
