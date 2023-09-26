import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Please fill in your Email Address"),
  password: Yup.string().required("Please fill in your Password"),
});
