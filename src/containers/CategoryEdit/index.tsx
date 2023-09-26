// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryForm } from "../../components";
import { CategoryForm as CategoryFormProps } from "../../types";
import axios from "axios";

const CategoryEdit = () => {
  const navigate = useNavigate();
  const validate = localStorage.getItem("token");
  if (!validate) {
    navigate("/login");
  }
  //   const [category, setCategory] = useState<Category>();

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  };

  //   const getCategory = useCallback(async () => {
  //     const fetching = await fetch(
  //       `https://mock-api.arikmpt.com/api/category/${id}`,
  //       { headers }
  //     );
  //     const response: Category = await fetching.json();

  //     setCategory(response);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [id]);

  //   useEffect(() => {
  //     getCategory();
  //   }, [getCategory]);

  const handleSubmit = async (values: CategoryFormProps) => {
    axios
      .put("https://mock-api.arikmpt.com/api/category/update", values, {
        headers,
      })
      .then((response) => {
        console.log("Edit Category form values submitted:", response.data);
        console.log("Form values submitted:", values);
      })
      .catch((error) => {
        console.log("Error updating:", error);
      });
    //     try {
    //       const fetching = await fetch(
    //         `https://mock-api.arikmpt.com/api/category/update`,
    //         {
    //           method: "PUT",
    //           headers: headers,
    //           body: JSON.stringify(values),
    //         }
    //       );
    //       await fetching.json();
    //       navigate("/category");
    //     } catch (error) {
    //       alert(error);
    //     }
    //   };
    //   if (category) {
    //     return <CategoryForm onSubmit={handleSubmit} />;
    //   }
    //   return null;
  };
  return <CategoryForm onSubmit={handleSubmit} />;
};
export default CategoryEdit;
