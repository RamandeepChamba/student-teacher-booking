**Overview and Purpose**

- displays teachers list in a table format.

- is used in both: searched teacher results (student)
  and all teachers (admin)

**Data Flow & Interaction**

- renders a TeacherListItem for each teacher.

**Props**

- teachers: teachers to show in a table.
- role: is passed down to TeacherListItem child
  which uses it to display different actions.
  - can be "booking" or "crud"
