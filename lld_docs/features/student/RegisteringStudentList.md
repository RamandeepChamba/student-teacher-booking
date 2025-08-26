**Overview and Purpose**

- Lists all students looking for admin approval

**Data Flow & Interaction**

- fetches and caches registering students from supabase using useGetRegisteringStudents.
  - queryKey: "registering-students"
- displays Table with headers and rows for each registering student.
- has a Modal which will view ApproveRejectRegistrationWindow windows
  when an action in RegisteringStudentListItem is selected.
