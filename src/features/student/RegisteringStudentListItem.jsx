import toast from "react-hot-toast";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ApproveRejectRegistrationWindow from "./ApproveRejectRegisterationWindow";
import { useDeleteStudent } from "./useDeleteStudent";
import { useQueryClient } from "@tanstack/react-query";
import useApproveStudentRegistration from "./useApproveStudentRegistration";

function RegisteringStudentListItem({ student }) {
  const { id, name, email } = student;
  const { isDeletingStudent, deleteStudent } = useDeleteStudent();
  const { isApprovingStudentRegistration, approveStudentRegisteration } =
    useApproveStudentRegistration();
  const queryClient = useQueryClient();

  function handleApprove() {
    approveStudentRegisteration({ id });
  }
  function handleReject() {
    // Will delete user
    deleteStudent(
      { id },
      {
        onSuccess() {
          // Refresh registering student list
          toast.success("Student registration rejected successfully");
          queryClient.invalidateQueries(["registering-students"]);
        },
        onError(err) {
          toast.error(err.message);
        },
      }
    );
  }

  return (
    <div className="row">
      <div>{name}</div>
      <div>{email}</div>
      {/* Actions */}
      <div>
        <Modal.Open opens={`student-approve-${id}`}>
          <Button variation="success">Approve</Button>
        </Modal.Open>
        <Modal.Window name={`student-approve-${id}`}>
          <ApproveRejectRegistrationWindow
            action="approve"
            onConfirm={handleApprove}
            isLoading={isApprovingStudentRegistration}
          />
        </Modal.Window>
        <Modal.Open opens={`student-reject-${id}`}>
          <Button variation="danger">Reject</Button>
        </Modal.Open>
        <Modal.Window name={`student-reject-${id}`}>
          <ApproveRejectRegistrationWindow
            action="reject"
            onConfirm={handleReject}
            isLoading={isDeletingStudent}
          />
        </Modal.Window>
      </div>
    </div>
  );
}
export default RegisteringStudentListItem;
