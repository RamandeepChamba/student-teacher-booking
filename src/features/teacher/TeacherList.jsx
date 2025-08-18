import TeacherListItem from "./TeacherListItem";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";

function TeachersList({ teachers, role = "booking" }) {
  return (
    <div>
      <Modal>
        {(!teachers || teachers?.length === 0) && <p>No teachers found</p>}
        {teachers?.length > 0 && (
          <Table $numCols={5}>
            <div className="row header">
              <div>Name</div>
              <div>Email</div>
              <div>Department</div>
              <div>Subject</div>
              <div>Actions</div>
            </div>
            {teachers.map((teacher) => {
              return (
                <TeacherListItem
                  key={teacher.id}
                  teacher={teacher}
                  role={role}
                />
              );
            })}
          </Table>
        )}
      </Modal>
    </div>
  );
}

export default TeachersList;
