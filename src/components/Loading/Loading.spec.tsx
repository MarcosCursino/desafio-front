import { render } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading component", () => {
  it("should be able to render loading component", () => {
    const loading = render(<Loading />);
    expect(loading).toBeTruthy();
  });

  it("should find a loading message", () => {
    const { getByText } = render(<Loading />);
    getByText("Carregando ...");
  });
});
