import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RegisterForm from ".";
import { BrowserRouter } from "react-router-dom";

describe("Test Login Form", () => {
  const mockProps = jest.fn();
  test("Title Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getByText("Sign Up");
    expect(title).toBeDefined();
  });

  test("Label Name Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getAllByText("Name *");
    expect(title).toBeDefined();
  });

  test("Label Email Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getAllByText("Email *");
    expect(title).toBeDefined();
  });

  test("Label Password Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getAllByText("Password *");
    expect(title).toBeDefined();
  });

  test("Submit Button Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getByText("REGISTER");
    expect(title).toBeDefined();
  });

  test("onSubmit Works Correctly", async () => {
    const { getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const nameInput = getByPlaceholderText("John") as HTMLElement;
    const emailInput = getByPlaceholderText("john123@email.com") as HTMLElement;
    const passwordInput = getByPlaceholderText("Enter Password") as HTMLElement;
    const submitButton = getByText("REGISTER");

    fireEvent.change(nameInput, { target: { value: "testName" } });
    fireEvent.change(emailInput, { target: { value: "testEmail@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockProps).toHaveBeenCalledTimes(1);
      expect(mockProps).toHaveBeenCalledWith({
        name: "testName",
        email: "testEmail@email.com",
        password: "testPassword",
      });
    });
  });
});
