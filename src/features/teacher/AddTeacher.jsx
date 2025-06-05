import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import AddTeacherForm from "./AddTeacherForm";

function AddTeacher() {
  return (
    <Modal>
      <Modal.Open opens="add-a-teacher-form">
        <Button variation="success">Add a teacher</Button>
      </Modal.Open>
      <Modal.Window name="add-a-teacher-form">
        <AddTeacherForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddTeacher;
