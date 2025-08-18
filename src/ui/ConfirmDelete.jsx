import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  padding: 2rem;
  background-color: var(--color-light);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function ConfirmDelete({ entity, onDelete, onCloseModal }) {
  return (
    <Container>
      <p>Are you sure you want to delete this {entity}</p>
      <div>
        <Button variation="danger" onClick={onDelete}>
          Delete
        </Button>
        <Button onClick={onCloseModal} variation="dark">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default ConfirmDelete;
