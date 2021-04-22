// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  first_name: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be 3 chars long"),
  last_name: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be 3 chars long"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  pwd: yup
    .string()
    .min(6, "Password must be more than 6 chars")
    .required("Password is required"),
  tos: yup
      .boolean()
      .oneOf([true], "You must accept our Terms of Service"),
});