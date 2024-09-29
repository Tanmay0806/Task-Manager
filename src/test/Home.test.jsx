import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home Component", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });
});
