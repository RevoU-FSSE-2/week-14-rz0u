import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from ".";
import { BrowserRouter } from "react-router-dom";

describe("Test Login Form", () => {
  const mockProps = jest.fn();
  test("Title Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getByText("Sign In");
    expect(title).toBeDefined();
  });

  test("Label Email Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getAllByText("Email");
    expect(title).toBeDefined();
  });

  test("Label Password Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getAllByText("Password");
    expect(title).toBeDefined();
  });

  test("Submit Button Rendered Correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />;
      </BrowserRouter>
    );
    const title = screen.getByText("submit");
    expect(title).toBeDefined();
  });

  test("onSubmit Works Correctly", async () => {
    const mockProps2 = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps2} />;
      </BrowserRouter>
    );
    const emailInput = getByPlaceholderText("john123@email.com") as HTMLElement;
    const passwordInput = getByPlaceholderText("Enter Password") as HTMLElement;
    const submitButton = getByText("submit");

    fireEvent.change(emailInput, { target: { value: "testEmail@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockProps2).toHaveBeenCalledTimes(1);
      expect(mockProps2).toHaveBeenCalledWith({
        email: "testEmail@email.com",
        password: "testPassword",
      });
    });
  });
});
