import { render } from "@testing-library/react";
import { Search } from "./Search";

describe("Search component", () => {
  it("should render the component", () => {
    const loading = render(<Search />);
    expect(loading).toBeTruthy();
  });

  it("should be able to render an input", () => {
    const { getByPlaceholderText } = render(<Search />);
    const inputElement = getByPlaceholderText("Busque um livro");

    expect(inputElement).toBeTruthy();
  });
});
