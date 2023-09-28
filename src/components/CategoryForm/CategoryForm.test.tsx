import {
  fireEvent,
  getByLabelText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import CategoryForm from ".";
import { BrowserRouter } from "react-router-dom";

describe("Test Category Form", () => {
  const mockProps = jest.fn();
  test("Title Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getByText("ADD / EDIT");
    expect(title).toBeDefined();
  });

  test("Back Button Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getByText("Back");
    expect(title).toBeDefined();
  });

  test("Label Name Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getAllByText("Name");
    expect(title).toBeDefined();
  });

  test("Label Status Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getAllByText("Status");
    expect(title).toBeDefined();
  });

  test("Submit Button Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getByRole("button", { name: "" });
    expect(title).toBeDefined();
  });

  test("onSubmit Works Correctly", async () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const nameInput = getByPlaceholderText("Name") as HTMLElement;
    const statusSelect = getByLabelText("Status") as HTMLElement;
    const submitButton = screen.getByRole("button", { name: "" });

    fireEvent.change(nameInput, { target: { value: "testName" } });
    fireEvent.change(statusSelect, { target: { value: "active" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockProps).toHaveBeenCalledTimes(1);
      expect(mockProps).toHaveBeenCalledWith({
        name: "testName",
        is_active: "active",
      });
    });
  });
});
