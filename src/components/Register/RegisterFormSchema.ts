import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Please fill in your Full Name"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Please fill in your Email Address"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Please fill in your desired Password"),
});
