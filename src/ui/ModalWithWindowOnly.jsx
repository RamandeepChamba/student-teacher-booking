/*

- Shows it's children in a modal
- have close button to close itself

*/

import Overlay from "./Overlay";
import StyledModal from "./StyledModal";
import { createPortal } from "react-dom";
import Button from "./Button";

function ModalWithWindowOnly({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose} radius="normal" variation="danger">
          &times;
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default ModalWithWindowOnly;
