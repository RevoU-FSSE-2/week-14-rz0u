import axios from "axios";
import { CategoryForm } from "../../components";
import { CategoryForm as CategoryFormProps } from "../../types";
import { useNavigate } from "react-router-dom";

const CategoryAdd = () => {
  const navigate = useNavigate();
  const validate = localStorage.getItem("token");
  if (!validate) {
    navigate("/login");
  }
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  };

  const handleSubmit = async (values: CategoryFormProps) => {
    console.log("Edit Category form values submitted:", values);
    axios
      .post("https://mock-api.arikmpt.com/api/category/create", values, {
        headers,
      })
      .then((response) => {
        console.log("Add Successful", response.data);
        window.location.replace("/category");
      });
  };
  return (
    <>
      <CategoryForm onSubmit={handleSubmit} />;
    </>
  );
};
export default CategoryAdd;
