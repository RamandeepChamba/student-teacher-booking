# TODOS

- Teacher should Schedule an appointment ✅

  - Make TeacherAppointmentCalendar selectable ✅
  - onSelect view Schedule Appointment form
    - Schedule Appointment form
      - similar to Book appointment form, just needs a way to input student
      - inputing student
        - just use student id for now (needs to implement Search a student otherwise)

- Show registering students in admin panel ✅

- When user clicks appointment show details ✅
  - Pass onClick handler from parent to AppointmentCalendar
    - onClick handler should open AppointmentDetailed ✅
  - define onClick handler on student appointments
  - define onClick handler on searched teacher appointments
- AppointmentDetailed should show approve / reject when pending ✅
  - if user is teacher && pending show buttons
  - appointment will be passed
  - approve / reject
    - will change appointment status (mutation -> on success -> hide detailed & refresh)
- USE CALENDAR FOR BOOKING AND DISPLAYING APPOINTMENTS 🔼
- Form and it's elements: Input, Label, Form row / group ✅
- Modal window ✅
- log in and assign role, after fetching from DB, doing locally for now ✅
- make admin, student and teachers routes protected respectively ✅

## admin

- show list of registered but not approved students with approve and reject buttons ✅
- show list of teachers with update, delete buttons. ✅

## teacher

- should also be able to schedule an appointment. ✅
- show detailed appointment view when appointment is clicked on calendar ✅
  - student name
  - date and time
  - message
  - if "pending" show approve and reject buttons.

## student

- [optional] should not be able to click and view appointments by other students. (hide messages too)
- should be able to view their appointments on the calendar.
- show detailed appointment view when appointment is clicked on calendar
  - message
  - date and time
  - teacher
  - department and subject
  - status?

# GUIDE

**Check /lld_docs/ for better documentation, our /src/ and /lld_docs/ have same file structure**

## Login and Register

- Teachers can't register themselves, only admin can add teacher using add teacher form.
- Students can register themselves but won't be able to login until admin approves them.

## Roles

- only certain roles can access certain routes (e.g only admin can access '/teachers' route etc.)
- sidebar also shows different links based on different roles

## Calendar

### student

- Can search a teacher using form on Book an appointment page.
- Can view appointments of searched teacher on a calendar after clicking the "Book" button.
- Can select a time for an appointment using drag and drop on calendar (opened as a modal after clicking "Book" button)
  which will open a book an appointment form.
- Student appointments calendar is not selectable, you can only view appointments.

## Form

### (Add a teacher, Search a teacher)

- using same fields (i.e. Department and subject) in add a teacher and search a teacher form.
  Fetching department list on form render and fetching subjects according to the department selected.
- Made a custom hook (useGetDepartmentsAndSubjects) and
  component (DepartmentsAndSubjectsForForm) to achieve the above and follow DRY principle.

### Add a teacher, Update a teacher

- using same form component to add and update teacher, if "teacher" prop is provided then it's updating else adding.

### Admin

- Made form to add a teacher ✅

### Student

- Made a form to search a teacher for appointment booking ✅

# Technologies used

- Bundler: vite@4
- React
- Routing: react-router-dom@6
- UI state: Context API
- Remote state: @tanstack/react-query@4
- Styling: styled components

# Architecture Document

## TODOS

- Add supabase db design diagram when app is finished

# Future improvements

- shouldn't be able to book appointments in the past.
