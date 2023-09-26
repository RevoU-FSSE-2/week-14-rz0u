import * as Yup from "yup";

export const initialValues = {
  name: "",
  is_active: true,
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Please fill in the name"),
  is_active: Yup.string().required("Please pick the status"),
});
