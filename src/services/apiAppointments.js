import supabase from "./supabase";

// Get specific teacher's appointments
export async function getTeacherAppointments({ teacherId }) {
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .eq("teacher_id", teacherId);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  // Format dates
  const formattedData = data.map((appointment) => {
    return {
      ...appointment,
      start: new Date(appointment.start),
      end: new Date(appointment.end),
      title: appointment.message,
    };
  });
  return formattedData;
}
// Get specific student's appointments
export async function getStudentAppointments({ studentId }) {
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .eq("student_id", studentId);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  // Format dates
  const formattedData = data.map((appointment) => {
    return {
      ...appointment,
      start: new Date(appointment.start),
      end: new Date(appointment.end),
      title: appointment.message,
    };
  });
  return formattedData;
}

// Add an appointment
export async function addAppointment({ appointment }) {
  const { data, error } = await supabase
    .from("appointments")
    .insert([appointment])
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

// Get all appointment details
export async function getAppointmentDetails({ appointmentId }) {
  const { data, error } = await supabase
    .from("appointments")
    .select(
      `
        *,
        students(name),
        teachers(name)
      `
    )
    .eq("id", appointmentId);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  const appointment = data[0];
  // Format dates
  const formattedAppointment = {
    ...appointment,
    start: new Date(appointment.start),
    end: new Date(appointment.end),
  };
  return formattedAppointment;
}

// Update an appointment
export async function updateAnAppointment({ appointment }) {
  const { id, ...fieldsToUpdate } = appointment;
  const { data, error } = await supabase
    .from("appointments")
    .update(fieldsToUpdate)
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}
