import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Lista from "../componentes/Lista";

test("renders item lista", () => {
  render(<Lista />);

  const inputElement = screen.getByTestId("form-container");
  fireEvent.change(inputElement, { target: { value: "teste" } });
  expect(inputElement.className).toEqual("teste");
});
