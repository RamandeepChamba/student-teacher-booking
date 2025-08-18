import { isMatchPassword } from "../utils/helper";
import supabase from "./supabase";

export async function getStudentTeacher({ email, password, role }) {
  // Get user by email
  const { data, error } = await supabase
    .from(role + "s")
    .select("*")
    .eq("email", email);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  let user = data[0];
  let myError;
  if (user) {
    // Match password
    if (!isMatchPassword(password, user.password)) {
      user = null;
      myError = "Invalid credentials";
    } else {
      // Is user approved
      if (role === "student" && !user.is_approved) {
        user = null;
        myError = "Waiting for admin approval";
      }
    }
  } else {
    myError = "Invalid credentials";
  }
  return { user, myError };
}
