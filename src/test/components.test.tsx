import { cleanup, render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("1 - Header should be loaded", () => {
  afterEach(() => cleanup());
  it("Logo should be visible", () => {
    render(<Home />);
    const heading = screen.getByTestId('header');
    expect(heading).toBeInTheDocument()
  });
});

describe("2 - Main should be loaded", () => {
  afterEach(() => cleanup());
  it("Main should be visible", () => {
    render(<Home />);
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument()
  });
})
