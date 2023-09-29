import { render, screen } from "@testing-library/react";
import CategoryList from ".";
import { Category } from "../../types";

test("renders correct number of rows", () => {
  const data: Category[] = [
    { id: "1", name: "Category 1", is_active: true },
    { id: "2", name: "Category 2", is_active: false },
  ];

  render(
    <CategoryList data={data} onClickEdit={() => {}} onClickDelete={() => {}} />
  );

  const rows = screen.getAllByRole("row");
  expect(rows).toHaveLength(data.length + 1);
});
