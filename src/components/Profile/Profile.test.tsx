import { render, screen } from "@testing-library/react";
import Profile from ".";

describe("Test Profile Page", () => {
  test("Title Rendered Correctly", async () => {
    render(<Profile />);
    const title = screen.getByText("Profile Page");
    expect(title).toBeDefined();
  });
});
