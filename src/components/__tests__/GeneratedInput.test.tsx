import { render, screen, fireEvent } from "@testing-library/react";
import GeneratedInput from "../GeneratedInput";

describe("generated input icon", () => {
  it("should not have class 'clickable' with no generated input", () => {
    render(<GeneratedInput generatedPassword="" />);

    const icon = screen.getByTestId("copy-icon");

    expect(icon).not.toHaveClass("clickable");
  });

  it("should have class 'clickable' with generated input", () => {
    render(<GeneratedInput generatedPassword="1234ths$!45" />);

    const icon = screen.getByTestId("copy-icon");

    expect(icon).toHaveClass("clickable");
  });
});

describe("toast notification", () => {
  it("should display when copy icon is clicked and generated password is not empty", () => {
    render(<GeneratedInput generatedPassword="1234ths$!45" />);
    const icon = screen.getByTestId("copy-icon");
    fireEvent.click(icon);

    const toast = screen.getByText("Copied password to the clipboard!");

    expect(toast).toBeVisible();
  });

  it("should be hidden when generated password is empty", () => {
    render(<GeneratedInput generatedPassword="" />);
    const toast = screen.getByText("Copied password to the clipboard!");

    expect(toast).toHaveClass("hidden");
  });
});
