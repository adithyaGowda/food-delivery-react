import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  // beforeAll(() => {
  //   console.log("before all");
  // });

  // beforeEach(() => {
  //   console.log("before each");
  // });

  // afterAll(() => {
  //   console.log("after all");
  // });

  // afterEach(() => {
  //   console.log("after each");
  // });

  it("Should load the Contact Us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load the button inside Contact Us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load the input name inside Contact Us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside Contact Us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
