import { hashPassword } from "../utils/helper";
import { getStudentTeacher } from "./apiStudentsTeachers";
import supabase from "./supabase";

// Add a teacher
export async function addTeacher({ teacher }) {
  // Check if email already exists
  await checkEmailAlreadyExists(teacher.email);
  // Hash password
  const hashedPassword = hashPassword(teacher.password);
  // Add teacher
  const teacherToBeAdded = {
    name: teacher.name,
    email: teacher.email,
    password: hashedPassword,
    department_id: parseInt(teacher.department),
    subject_id: parseInt(teacher.subject),
  };
  const { data, error } = await supabase
    .from("teachers")
    .insert([teacherToBeAdded])
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

// Search teachers
export async function searchTeachers({ teacherQuery }) {
  let query = supabase.from("teachers").select(`
    id,
    name,
    email,
    departments (name),
    subjects (name)
  `);
  if (teacherQuery.department_id) {
    query = query.eq("department_id", teacherQuery.department_id);
  }
  if (teacherQuery.subject_id) {
    query = query.eq("subject_id", teacherQuery.subject_id);
  }
  if (teacherQuery.name) {
    query = query.ilike("name", `%${teacherQuery.name}%`);
  }
  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

// Get teacher
export async function getTeacher({ email, password }) {
  const { user: teacher, myError: error } = await getStudentTeacher({
    email,
    password,
    role: "teacher",
  });
  return { error, teacher };
}

// Get all teachers
export async function getAllTeachers() {
  const { data, error } = await supabase.from("teachers").select(`
    id,
    name,
    email,
    departments (id, name),
    subjects (id, name)
  `);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

// Update a teacher
export async function updateTeacher({ teacher }) {
  // If email changed - Check if email already exists
  // await checkEmailAlreadyExists(teacher.email);
  // If new password given, hash it
  let hashedPassword;
  if (teacher.password) {
    hashedPassword = hashPassword(teacher.password);
  }
  // Update teacher
  const teacherToBeUpdated = {
    name: teacher.name,
    email: teacher.email,
    department_id: parseInt(teacher.department),
    subject_id: parseInt(teacher.subject),
  };
  if (hashedPassword) {
    teacherToBeUpdated.password = hashedPassword;
  }
  const { data, error } = await supabase
    .from("teachers")
    .update({ ...teacherToBeUpdated })
    .eq("id", teacher.id)
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function deleteTeacher({ id }) {
  const { error } = await supabase.from("teachers").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

// Helpers
async function checkEmailAlreadyExists(email) {
  const { data: data1, error: error1 } = await supabase
    .from("teachers")
    .select("*")
    .eq("email", email);
  if (error1) {
    throw new Error(error1.message);
  }
  if (data1.length > 0) {
    throw new Error("Email already registered");
  }
}
