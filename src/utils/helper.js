import bcrypt from "bcryptjs";
import moment from "moment";

// Hash Password
export function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  return hashedPassword;
}
export function isMatchPassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

export function formatDateString(date) {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
}
