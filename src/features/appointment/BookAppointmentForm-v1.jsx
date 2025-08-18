import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";

function BookAppointmentForm({ teacher }) {
  const { id, name, email, departments, subjects } = teacher;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!date || !time) return;
    console.log(date, time, message);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <div>Name</div>
        <div>{name}</div>
      </Form.Group>
      <Form.Group>
        <div>Email</div>
        <div>{email}</div>
      </Form.Group>
      <Form.Group>
        <div>Department</div>
        <div>{departments.name}</div>
      </Form.Group>
      <Form.Group>
        <div>Subject</div>
        <div>{subjects.name}</div>
      </Form.Group>
      <Form.Group>
        <label htmlFor="date">Appointment date</label>
        <input
          type="date"
          value={date}
          id="date"
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <label htmlFor="time">Appointment time</label>
        <input
          type="time"
          value={time}
          id="time"
          required
          onChange={(e) => setTime(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <label htmlFor="message">Message [optional]</label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </Form.Group>
      <Form.Group>
        <Button>Book</Button>
        <Button variation="dark">Cancel</Button>
      </Form.Group>
    </Form>
  );
}

export default BookAppointmentForm;
