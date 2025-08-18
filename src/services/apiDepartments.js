import supabase from "./supabase";

// List of all departments
export async function getDepartments() {
  const { data, error } = await supabase.from("departments").select("*");

  if (error) {
    console.error(error);
    throw new error("Departments couldn't be loaded");
  }
  return data;
}
