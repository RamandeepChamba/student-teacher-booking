import supabase from "./supabase";

export async function getAdmin({ email, password }) {
  const { data, error } = await supabase
    .from("admins")
    .select("*")
    .eq("email", email)
    .eq("password", password);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data[0];
}
