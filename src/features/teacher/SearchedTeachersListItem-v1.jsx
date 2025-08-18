import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import SearchedTeacherAppointmentsCalendar from "./SearchedTeacherAppointmentsCalendar";

function SearchedTeachersListItem({ teacher, role }) {
  const { name, email, departments, subjects } = teacher;

  return (
    <div className="row">
      {/* Name */}
      <div>{name}</div>
      {/* Email */}
      <div>{email}</div>
      {/* Department */}
      <div>{departments.name}</div>
      {/* Subject */}
      <div>{subjects.name}</div>
      {role === "booking" && (
        <div>
          {/* Book button */}
          <Modal>
            <Modal.Open opens={`bookForm-teacher-${teacher.id}`}>
              <Button>Book</Button>
            </Modal.Open>
            <Modal.Window name={`bookForm-teacher-${teacher.id}`}>
              <SearchedTeacherAppointmentsCalendar teacher={teacher} />
            </Modal.Window>
          </Modal>
        </div>
      )}
      {role === "crud" && (
        <div>
          {/* CRUD buttons */}
          <Modal>
            <Modal.Open opens="">
              <Button>Update</Button>
            </Modal.Open>
            <Modal.Window name="">{/* Update teacher form */}</Modal.Window>
            <Modal.Open opens="">
              <Button variation="danger">Delete</Button>
            </Modal.Open>
            <Modal.Window name="">{/* Delete teacher confirm */}</Modal.Window>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default SearchedTeachersListItem;
