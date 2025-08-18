import styled from "styled-components";
import Button from "../../ui/Button";

const Container = styled.div`
  padding: 2rem;
  background-color: var(--color-light);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function ApproveRejectRegistrationWindow({
  action,
  onConfirm,
  onCloseModal,
  isLoading,
}) {
  return (
    <Container>
      <p>Are you sure you want to {action} this user's registration</p>
      <div>
        <Button
          variation={action === "reject" ? "danger" : "success"}
          onClick={onConfirm}
          disabled={isLoading}
        >
          {action === "reject" ? "Reject" : "Approve"}
        </Button>
        <Button onClick={onCloseModal} variation="dark" disabled={isLoading}>
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default ApproveRejectRegistrationWindow;
