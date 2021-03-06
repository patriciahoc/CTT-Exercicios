import React from "react";
import { findByAltText, render, screen } from "@testing-library/react";
import Alert from "../componentes/Alert";

test("Você deve aceitar os termos", async () => {
  render(<Alert />);

  const movie = await findByAltText("Você deve aceitar os termos");
});
