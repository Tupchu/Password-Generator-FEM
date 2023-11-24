import { render, screen } from "@testing-library/react";
import App from "./App";

it("should have hello world", () => {
  render(<App />);
  const msg = screen.queryByText(/hello world/i);

  expect(msg).toBeVisible();
});
