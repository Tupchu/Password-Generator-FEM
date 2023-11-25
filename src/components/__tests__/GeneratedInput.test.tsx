import { render, screen } from "@testing-library/react";
import GeneratedInput from "../GeneratedInput";

it("should not have class 'clickable' with no generated input", () => {
  render(<GeneratedInput generatedPassword="" />);

  const input = screen.queryByAltText("Copy generated password");

  expect(input).not.toHaveClass("clickable");
});

it("should have class 'clickable' with generated input", () => {
  render(<GeneratedInput generatedPassword="1234ths$!45" />);

  const input = screen.queryByAltText("Copy generated password");

  expect(input).toHaveClass("clickable");
});
