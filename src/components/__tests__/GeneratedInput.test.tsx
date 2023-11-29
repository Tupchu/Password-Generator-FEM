import { render, screen } from "@testing-library/react";
import GeneratedInput from "../GeneratedInput";

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
