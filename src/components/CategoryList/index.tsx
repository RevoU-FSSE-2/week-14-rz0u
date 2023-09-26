import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";
import { Category } from "../../types";

interface Props {
  data: Category[];
  onClickEdit: (id: string) => void;
  onClickDelete: (id: string) => void;
}

const CategoryList = ({ data, onClickEdit, onClickDelete }: Props) => {
  return (
    <TableContainer component={Paper} elevation={5}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">
                {item.is_active ? "Active" : "Inactive"}
              </TableCell>
              <TableCell align="center">
                <ButtonGroup disableElevation>
                  <Button
                    variant="contained"
                    onClick={() => onClickEdit(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => onClickDelete(item.id)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoryList;
