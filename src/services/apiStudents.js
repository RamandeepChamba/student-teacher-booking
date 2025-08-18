import { hashPassword } from "../utils/helper";
import { getStudentTeacher } from "./apiStudentsTeachers";
import supabase from "./supabase";

export async function getStudent({ email, password }) {
  const { user: student, myError: error } = await getStudentTeacher({
    email,
    password,
    role: "student",
  });
  return { error, student };
}

export async function addStudent({ name, email, password }) {
  // Check if email already exists
  const { data: data1, error: error1 } = await supabase
    .from("students")
    .select("*")
    .eq("email", email);
  if (error1) {
    throw new Error(error1.message);
  }
  if (data1.length > 0) {
    throw new Error("Email already registered");
  }
  // Hash password
  const hashedPassword = hashPassword(password);
  // Add student
  const { data, error } = await supabase
    .from("students")
    .insert([{ name, email, password: hashedPassword }])
    .select();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function getRegisteringStudents() {
  let { data: students, error } = await supabase
    .from("students")
    .select("id,name,email")
    .eq("is_approved", false);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return students;
}

export async function deleteStudent({ id }) {
  const { error } = await supabase.from("students").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function approveStudentRegisteration({ id }) {
  const { data, error } = await supabase
    .from("students")
    .update({ is_approved: true })
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}
