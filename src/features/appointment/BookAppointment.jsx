import { useState } from "react";
import SearchTeacherForm from "../teacher/SearchTeacherForm";
import Button from "../../ui/Button";
import TeachersList from "../teacher/TeacherList";

function BookAppointment() {
  const [showForm, setShowForm] = useState(true);
  const [teachers, setTeachers] = useState(null);
  return (
    <div>
      {!showForm && (
        <Button onClick={() => setShowForm(true)}>Search Teacher</Button>
      )}
      {/* Search Teacher Form */}
      {showForm && (
        <SearchTeacherForm
          onClose={() => setShowForm(false)}
          setTeachers={setTeachers}
        />
      )}
      {/* Searched Teachers List */}
      {teachers && <TeachersList teachers={teachers} role="booking" />}
    </div>
  );
}

export default BookAppointment;
