import { useEffect, useState } from "react";
import useGetDepartments from "./useGetDepartments";
import useGetSubjects from "./useGetSubjects";

export default function useGetDepartmentsAndSubjects(teacher) {
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  // Using this to decide if subject should be default or pre-selected (for update teacher form)
  const [wasDepartmentUpdated, setWasDepartmentUpdated] = useState(false);

  // Fetch departments
  const { isLoading: isLoadingDepartments, data: departments } =
    useGetDepartments();
  const results = useGetSubjects({ departmentId: department });
  // will only return subjects when department is already selected
  // did this because can't condition a hook (useGetSubjects)
  const { isLoading: isLoadingSubjects, data: subjects } = department
    ? results
    : { isLoading: false, subjects: null };

  useEffect(
    function () {
      if (!departments) return;
      // Add teacher form - Select the first department so it's subjects can be fetched
      if (!teacher) {
        setDepartment(departments[0].id + "");
      } else {
        // Update teacher form - Select the teacher's department
        setDepartment(teacher.departments.id + "");
      }
    },
    [departments, setDepartment]
  );
  useEffect(
    function () {
      if (!subjects) return;
      // Add teacher form - Select the first subject
      if (!teacher) {
        setSubject(subjects[0].id + "");
      } else {
        /* is using pre-filled data
        Yes - select subject of teacher in DB
        No - select first one
        */
        if (!wasDepartmentUpdated) {
          // Yes
          setSubject(teacher.subjects.id + "");
        } else {
          // No
          setSubject(subjects[0].id + "");
        }
      }
    },
    [subjects]
  );

  return {
    isLoadingDepartments,
    setWasDepartmentUpdated,
    departments,
    isLoadingSubjects,
    subjects,
    department,
    setDepartment,
    subject,
    setSubject,
  };
}
