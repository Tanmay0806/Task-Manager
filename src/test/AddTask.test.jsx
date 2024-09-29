import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddTask from "../users/AddTask";

describe("AddTask Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <AddTask />
      </MemoryRouter>
    );
  });
});
