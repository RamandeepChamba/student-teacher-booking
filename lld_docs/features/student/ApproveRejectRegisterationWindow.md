**Overview and Purpose**

- used as modal window to confirm reject or approve student registration (role: admin)

**Props**

- action:
  - to display text of action to be performed (approve/reject)
- onConfirm:
  - handler to handle when action is confirmed
- onCloseModal:
  - handler to handle when confirmation is cancelled
- isLoading:
  - while onConfirm is running
  - to disable buttons
