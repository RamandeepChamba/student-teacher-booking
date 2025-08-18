import { cloneElement, createContext, useContext, useState } from "react";
import Overlay from "./Overlay";
import StyledModal from "./StyledModal";
import { createPortal } from "react-dom";
import Button from "./Button";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}
function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (openName !== name) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={close} radius="normal" variation="danger">
          &times;
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
