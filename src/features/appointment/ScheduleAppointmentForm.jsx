import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { formatDateString } from "../../utils/helper";
import styled from "styled-components";
import HeaderForModalWindow from "../../ui/HeaderForModalWindow";
import { useAddAppointment } from "./useAddAppointment";
import LabelText from "../../ui/LabelText";

function ScheduleAppointmentForm({ start, end, onClose }) {
  const [message, setMessage] = useState("");
  const [studentId, setStudentId] = useState("");
  const { user } = useAuth();
  const { addAppointment, isAddingAppointment } = useAddAppointment();
  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault();
    const appointment = {
      student_id: parseInt(studentId),
      teacher_id: user.id,
      start: formatDateString(start),
      end: formatDateString(end),
      message,
    };
    console.log(appointment);
    addAppointment(
      { appointment },
      {
        onError(err) {
          toast.error(err.message);
        },
        onSuccess(data) {
          // 1. Close form
          onClose();
          // 2. Refetch searched -> booked teacher's appointments
          queryClient.invalidateQueries(["teacher", user.id, "appointments"]);
        },
      }
    );
  }
  return (
    <>
      <HeaderForModalWindow>Schedule an appointment</HeaderForModalWindow>
      <Form onSubmit={handleSubmit}>
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
          <label htmlFor="student">
            <LabelText>Student ID</LabelText>
          </label>
          <input
            type="number"
            name="student"
            id="student"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Button disabled={isAddingAppointment}>Schedule</Button>
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

export default ScheduleAppointmentForm;
