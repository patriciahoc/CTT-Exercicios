import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "../componentes/Avatar";

test("renders scr", () => {
  render(<Avatar />);

  const imagemElement = screen.getByAltText("oceano");
  expect(imagemElement).toHaveAttribute("src", "ocean.png");
});
