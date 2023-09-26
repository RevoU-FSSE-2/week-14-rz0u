import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Category, CategoryForm as CategoryFormProps } from "../../types";
import { initialValues, validationSchema } from "./CategoryFormSchema";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

interface Props {
  onSubmit: (values: CategoryFormProps) => void;
  category?: Category;
}

const CategoryForm = ({ onSubmit, category }: Props) => {
  const handleSubmit = (values: CategoryFormProps) => {
    onSubmit(values);
  };
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: category ?? initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

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
          ADD / EDIT
        </Typography>
        <Button variant="text" onClick={() => navigate("/category")}>
          Back
        </Button>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              size="small"
            />
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="is_active"
                label="Status"
                value={formik.values.is_active ? "active" : "inactive"}
                onChange={formik.handleChange}
                // onBlur={() => formik.setFieldTouched("is_active", true)}
                error={
                  formik.touched.is_active && Boolean(formik.errors.is_active)
                }
                size="small"
              >
                <MenuItem value={"active"}>Active</MenuItem>
                <MenuItem value={"inactive"}>Inactive</MenuItem>
                {formik.touched.is_active && formik.errors.is_active && (
                  <FormHelperText error>
                    {formik.errors.is_active}
                  </FormHelperText>
                )}
              </Select>
            </FormControl>

            <IconButton type="submit" disableRipple>
              <AddCircleOutlineIcon sx={{ color: blue[400] }} />
            </IconButton>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default CategoryForm;
