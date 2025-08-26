**Overview and Purpose**

- shows registering student list item.

**Data Flow & Interaction**

- opens ApproveRejectRegistrationWindow as modal window to confirm approve or reject when
  any of the action is selected.
- rejecting a registering student will delete that user from database.
- deletes or approves a registering student using mutations.

**Props**

- student:
  - student to display as a list item (table row)
