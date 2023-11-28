import { render, screen } from "@testing-library/react";
import StrengthIndicator from "../StrengthIndicator";

it("should display four empty indicators", () => {
  render(<StrengthIndicator passwordLength={0} options={0} />);

  const indicators = screen.getAllByTestId("indicator");

  expect(indicators.length).toEqual(4);

  indicators.forEach((indicator) => {
    expect(indicator).not.toHaveClass("strength-strong");
    expect(indicator).not.toHaveClass("strength-medium");
    expect(indicator).not.toHaveClass("strength-weak");
    expect(indicator).not.toHaveClass("strength-weakest");
  });
});

it("should indicate a strong password", () => {
  render(<StrengthIndicator passwordLength={12} options={4} />);

  const indicators = screen.getAllByTestId("indicator");

  indicators.forEach((indicator) => {
    expect(indicator).toHaveClass("strength-strong");
  });
});

it("should indicate a medium password", () => {
  render(<StrengthIndicator passwordLength={6} options={4} />);

  const indicators = screen.getAllByTestId("indicator");

  indicators.forEach((indicator, ind) => {
    if (ind < 3) {
      expect(indicator).toHaveClass("strength-medium");
    } else {
      expect(indicator).not.toHaveClass("strength-medium");
    }
  });
});

it("should indicate a weak password", () => {
  render(<StrengthIndicator passwordLength={6} options={1} />);

  const indicators = screen.getAllByTestId("indicator");

  indicators.forEach((indicator, ind) => {
    if (ind < 2) {
      expect(indicator).toHaveClass("strength-weak");
    } else {
      expect(indicator).not.toHaveClass("strength-weak");
    }
  });
});

it("should indicate the weakest password", () => {
  render(<StrengthIndicator passwordLength={5} options={4} />);

  const indicators = screen.getAllByTestId("indicator");

  indicators.forEach((indicator, ind) => {
    if (ind < 1) {
      expect(indicator).toHaveClass("strength-weakest");
    } else {
      expect(indicator).not.toHaveClass("strength-weakest");
    }
  });
});
