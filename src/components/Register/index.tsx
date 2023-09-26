import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RegisterForm as RegisterFormProps } from "../../types";
import { initialValues, validationSchema } from "./RegisterFormSchema";

interface Props {
  onSubmit: (values: RegisterFormProps) => void;
}

const RegisterForm = ({ onSubmit }: Props) => {
  const handleSubmit = (values: RegisterFormProps) => {
    onSubmit(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        pt: "5rem",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          maxWidth: "max-content",
          padding: "1rem",
          margin: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ m: "1rem" }}>
          Sign Up
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              name="name"
              label="Name *"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              placeholder="John"
              size="small"
            />
            <TextField
              name="email"
              label="Email *"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              placeholder="john123@email.com"
              size="small"
            />
            <TextField
              name="password"
              label="Password *"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              size="small"
            />
            <Button variant="contained" type="submit">
              Register
            </Button>
          </Box>
        </form>

        <Typography variant="subtitle2" sx={{ m: "1rem" }}>
          Already have an account?
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mb: "1rem" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
