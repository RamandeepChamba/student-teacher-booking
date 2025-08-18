import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { formatDateString } from "../../utils/helper";
import HeaderForModalWindow from "../../ui/HeaderForModalWindow";
import { useAddAppointment } from "./useAddAppointment";
import LabelText from "../../ui/LabelText";

function BookAppointmentForm({ start, end, teacher = null, onClose }) {
  const { id, name, email, departments, subjects } = teacher;
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  const { addAppointment, isAddingAppointment } = useAddAppointment();
  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault();
    const appointment = {
      student_id: user.id,
      teacher_id: id,
      start: formatDateString(start),
      end: formatDateString(end),
      message,
    };
    addAppointment(
      { appointment },
      {
        onError(err) {
          toast.error(err.message);
        },
        onSuccess() {
          // 1. Close form
          onClose();
          // 2. Refetch teacher's appointments
          queryClient.invalidateQueries([
            "teacher",
            teacher.id,
            "appointments",
          ]);
        },
      }
    );
  }
  return (
    <>
      <HeaderForModalWindow>Book an appointment</HeaderForModalWindow>
      <Form onSubmit={handleSubmit}>
        <div>
          <LabelText>Name</LabelText>
          <div>{name}</div>
        </div>
        <div>
          <LabelText>Email</LabelText>
          <div>{email}</div>
        </div>
        <div>
          <LabelText>Department</LabelText>
          <div>{departments.name}</div>
        </div>
        <div>
          <LabelText>Subject</LabelText>
          <div>{subjects.name}</div>
        </div>
        <div>
          <LabelText>Start time</LabelText>
          <div>{start.toLocaleString()}</div>
        </div>
        <div>
          <LabelText>End time</LabelText>
          <div>{end.toLocaleString()}</div>
        </div>
        <Form.Group>
          <label htmlFor="message">
            <LabelText>Message</LabelText>
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </Form.Group>
        <Form.Group>
          <Button disabled={isAddingAppointment}>Book</Button>
          <Button
            variation="dark"
            type="button"
            onClick={onClose}
            disabled={isAddingAppointment}
          >
            Cancel
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default BookAppointmentForm;
