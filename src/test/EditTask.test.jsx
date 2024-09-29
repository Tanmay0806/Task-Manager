import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EditTask from "../users/EditTask";

describe("EditTask Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <EditTask />
      </MemoryRouter>
    );
  });
});
