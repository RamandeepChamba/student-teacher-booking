import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import AddUpdateTeacherForm from "./AddUpdateTeacherForm";

function AddTeacher() {
  return (
    <Modal>
      <Modal.Open opens="add-a-teacher-form">
        <Button variation="success">Add a teacher</Button>
      </Modal.Open>
      <Modal.Window name="add-a-teacher-form">
        <AddUpdateTeacherForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddTeacher;
