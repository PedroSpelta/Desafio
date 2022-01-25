import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("1 - Introduction should be load", () => {
  afterEach(() => cleanup());
  it("Introduction is found in the document", async () => {
    render(<Home />);
    const introduction = await screen.findByTestId("introduction-div");
    expect(introduction).toBeInTheDocument;
  });
});

describe("2 - Text should be visible, and info should be able to hide it", () => {
  afterEach(() => cleanup());
  it("Introduction is visible at load", async () => {
    render(<Home />);
    const introduction = await screen.findByTestId("introduction-text");
    expect(introduction).toBeVisible();
  });
  it("Introduction is invisible when info is clicked", async () => {
    render(<Home />);
    const introduction = await screen.findByTestId("introduction-text");
    const infoButton = await screen.findByTestId("info-button");
    console.log(introduction.innerHTML);
    fireEvent.click(infoButton);
    expect(introduction).toBeVisible();
  });
});
