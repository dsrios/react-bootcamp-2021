import React from "react";
import { render } from "@testing-library/react";
import AppHooks from "./AppHooks";

test("renders learn react link", () => {
  const { getByText } = render(<AppHooks />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
