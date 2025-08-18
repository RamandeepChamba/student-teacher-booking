import supabase from "./supabase";

// List of subjects from a specific department

export async function getSubjects({ departmentId }) {
  if (!departmentId) return null;
  const { data, error } = await supabase
    .from("subjects")
    .select("*")
    .eq("department_id", departmentId);
  if (error) {
    console.error(error);
    throw new error("Subjects couldn't be loaded");
  }
  return data;
}
