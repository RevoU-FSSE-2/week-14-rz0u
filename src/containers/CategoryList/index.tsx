import { useEffect, useState } from "react";
import { GetCategoryResponse } from "../../types";
import axios from "axios";
import { CategoryList as CategoryTable } from "../../components";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const navigate = useNavigate();
  const validate = localStorage.getItem("token");
  if (!validate) {
    navigate("/login");
  }
  const [info, setInfo] = useState<GetCategoryResponse>();

  const handleEditClick = (id: string) => {
    console.log(`Edit clicked for ID: ${id}`);
    navigate("/category/edit");
  };
  const handleDeleteClick = (id: string) => {
    console.log(`Delete clicked for ID: ${id}`);
    axios
      .delete(`https://mock-api.arikmpt.com/api/category/${id}`, {
        headers,
      })
      .then((response) => {
        console.log(`Resource with ID ${id} has been deleted.`, response);
        setInfo((prevInfo) => {
          if (prevInfo) {
            const updatedInfo = prevInfo.data.filter((item) => item.id !== id);
            return {
              ...prevInfo,
              data: updatedInfo,
            };
          }
          return prevInfo;
        });
      })
      .catch((error) => {
        console.error(`Error deleting resource with ID ${id}:`, error);
      });
  };

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  };

  const getCategoryList = async () => {
    axios
      .get<GetCategoryResponse>("https://mock-api.arikmpt.com/api/category", {
        headers,
      })
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  };

  useEffect(() => {
    getCategoryList();
  });

  const filteredData =
    info?.data.map(({ id, name, is_active }) => ({ id, name, is_active })) ||
    [];

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: "5rem",
      }}
    >
      <Box>
        <Typography variant="h4" gutterBottom>
          Category List
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
        }}
      >
        <Button
          variant="outlined"
          sx={{ m: "1rem", mr: "6rem" }}
          onClick={() => navigate("/category/add")}
        >
          Add
        </Button>
      </Box>
      <CategoryTable
        data={filteredData}
        onClickEdit={handleEditClick}
        onClickDelete={handleDeleteClick}
      />
    </Container>
  );
};

export default CategoryList;
