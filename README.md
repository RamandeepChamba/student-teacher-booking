# GUIDE

## Check /readme.pptx for documentation, how app works, how to use it etc.

## Check /lld_docs/ for component specific documentation, our /src/ and /lld_docs/ have same file structure

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

**Future improvements**

- shouldn't be able to book appointments in the past.
