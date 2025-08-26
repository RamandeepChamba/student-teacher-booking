**Overview and Purpose**

- custom hook to refactor and reuse departments and subjects logic
  in departments and subjects fields in our forms.

**Props**

- teacher:
  - if provided, we are in an update teacher form else
    add a teacher or search a teacher form.

**Execution**

- fetch departments on start.
- if no teacher, set department to departments[0]
- if teacher, set department to teacher's department
- on department change, fetch subjects or use from cache

**State**

- wasDepartmentUpdated:
  - used when we are updating a teacher.
  - if false, means department wasn't updated and is teacher's default,
    in that case subject should also be teacher's default.
  - if true, means department was updated atleast once, therefore no
    need to use teacher's subject but instead the first one of the department
    currently selected. If there is a need to reset the subject just cancel the form
    and open again.
