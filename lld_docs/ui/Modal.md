**Overview and Purpose**

- is a compound component with Open and Window as children.
- is a modal window that displays above everything else.
- Modal.Open contains a button which will open a window of a specific name.
- Modal.Window is a full viewport overlay that contains content to be
  displayed when related Open button is clicked.
  - Can close itself.
  - uses React portal to be absolutely positioned, relative to the entire document.

**How it Works**

- Modal has a state variable (openName) containing name of the opened window.

  - "" means no window is opened.

- can have one or more Modal.Open and Modal.Window pair under Modal.
- all Modal.Open will show but atmost one Modal.Window will be visible at any time,
  depending on our state variable "openName".
- Modal.Open can change state variable "openName" and Modal.Window which has that name opens
  and previous window (is any) closes.
- children of Modal.Window are passed a function to close the window (set openName to "")
  - onCloseModal is the name of this function passed as prop to children.
