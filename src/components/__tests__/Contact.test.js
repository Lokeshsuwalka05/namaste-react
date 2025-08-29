import Contact from "../Contact";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
  // you can write 'it' at the place of 'test'
  it("should render contact page with name field", () => {
    render(<Contact />);
    const result = screen.getByLabelText("Name:");
    expect(result).toBeInTheDocument();
  });
  test("should render contact page with two input field", () => {
    render(<Contact />);
    const field = screen.getAllByRole("textbox");
    const result = field.length;
    expect(result).toBe(2);
  });
});
