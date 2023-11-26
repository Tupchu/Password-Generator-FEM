import { render, screen } from "@testing-library/react";
import ConfigurePassword from "../ConfigurePassword";

describe("generate password button", () => {
  it("should be disabled if passwordlength is 0", () => {
    render(
      <ConfigurePassword passwordLength={0} updatePasswordLength={() => {}} />
    );

    const btn = screen.getByText("Generate", { selector: "button" });

    expect(btn).toBeDisabled();
  });

  it("should be disabled if passwordlength is less than 0", () => {
    render(
      <ConfigurePassword passwordLength={-1} updatePasswordLength={() => {}} />
    );

    const btn = screen.getByText("Generate", { selector: "button" });

    expect(btn).toBeDisabled();
  });

  it("should not be disabled if passwordlength is greater than 0", () => {
    render(
      <ConfigurePassword passwordLength={8} updatePasswordLength={() => {}} />
    );

    const btn = screen.getByText("Generate", { selector: "button" });

    expect(btn).not.toBeDisabled();
  });
});
