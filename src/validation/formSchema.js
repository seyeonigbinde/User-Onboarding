// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(6, "Full name must be 6 chars long"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  pwd: yup
    .string()
    .min(6, "Password must be more than 6 chars")
    .required("Password is required"),
  tos: yup.boolean(),
});