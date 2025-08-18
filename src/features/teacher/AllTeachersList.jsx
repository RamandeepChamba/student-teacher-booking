import Loader from "../../ui/Loader";
import TeachersList from "./TeacherList";
import { useGetAllTeachers } from "./useGetAllTeachers";

function AllTeachersList() {
  // Fetch all teachers
  const { isLoading, data } = useGetAllTeachers();
  return (
    <>{isLoading ? <Loader /> : <TeachersList teachers={data} role="crud" />}</>
  );
}

export default AllTeachersList;
