import AddTeacher from "../features/teacher/AddTeacher";
import AllTeachersList from "../features/teacher/AllTeachersList";

function Teachers() {
  return (
    <>
      {/* Add a teacher */}
      <AddTeacher />
      {/* Teachers List */}
      <AllTeachersList />
    </>
  );
}

export default Teachers;
