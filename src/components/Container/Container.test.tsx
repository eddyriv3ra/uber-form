import React from "react";
import { render } from "@testing-library/react";
import Container from "./Container";

describe("Container tests", () => {
  it("renders correctly", async () => {
    const children = "Hola";
    const { getByText } = render(<Container>{children}</Container>);
    const text = getByText("Hola");
    expect(text).toHaveTextContent(children);
  });
});
