import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import AddUpdateTeacherForm from "./AddUpdateTeacherForm";
import SearchedTeacherAppointmentsCalendar from "./SearchedTeacherAppointmentsCalendar";
import { useDeleteTeacher } from "./useDeleteTeacher";

function TeacherListItem({ teacher, role }) {
  const { name, email, departments, subjects } = teacher;

  const { isDeletingTeacher, deleteTeacher } = useDeleteTeacher();

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
          <Modal.Open opens={`teacher-update-form-${teacher.id}`}>
            <Button>Update</Button>
          </Modal.Open>
          <Modal.Window name={`teacher-update-form-${teacher.id}`}>
            {/* Update teacher form */}
            <AddUpdateTeacherForm teacher={teacher} />
          </Modal.Window>
          <Modal.Open opens={`teacher-delete-confirm-${teacher.id}`}>
            <Button variation="danger">Delete</Button>
          </Modal.Open>
          <Modal.Window name={`teacher-delete-confirm-${teacher.id}`}>
            <ConfirmDelete
              entity="teacher"
              onDelete={() => deleteTeacher({ id: teacher.id })}
            />
          </Modal.Window>
        </div>
      )}
    </div>
  );
}

export default TeacherListItem;
