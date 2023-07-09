import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter your Email"),
  password: Yup.string().min(3).required("Please Enter your password"),
});

export const signupSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is required"),
});

export const EditProfileSchema = Yup.object({});
