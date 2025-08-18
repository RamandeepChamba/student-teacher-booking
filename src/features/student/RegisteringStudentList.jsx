import Loader from "../../ui/Loader";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import RegisteringStudentListItem from "./RegisteringStudentListItem";
import { useGetRegisteringStudents } from "./useGetRegisteringStudents";

function RegisteringStudentList() {
  // Fetch all students who are pending for approval
  const { isLoading, data: students } = useGetRegisteringStudents();
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <Modal>
            {(!students || students?.length === 0) && (
              <p>No students are registering</p>
            )}
            {students?.length > 0 && (
              <>
                <h1>Registering Students</h1>
                <Table $numCols={3}>
                  <div className="row header">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Actions</div>
                  </div>
                  {students.map((student) => (
                    <RegisteringStudentListItem
                      key={student.id}
                      student={student}
                    />
                  ))}
                </Table>
              </>
            )}
          </Modal>
        </div>
      )}
    </>
  );
}

export default RegisteringStudentList;
