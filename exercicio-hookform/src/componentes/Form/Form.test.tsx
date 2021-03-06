import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Form from "./Form";

describe("teste formulario", () => {
  it("mostrar render", async () => {
    const form = <Form />;
    render(form);
  });

  it("mostrar erro input invalido", async () => {
    const form = <Form />;
    render(form);

    const formEl = screen.getByTestId("form");
    fireEvent.submit(formEl);

    const error = await screen.findAllByRole("alert");
    expect(error).toHaveLength(4);
  });

  it("escrever nome", async () => {
    const form = <Form />;
    render(form);

    const formEl = screen.getByTestId("form");
    const inputEl = screen.getByTitle("nome");

    //digita o nome
    userEvent.type(inputEl, "Patricia");

    //submete o formulario
    fireEvent.submit(formEl);

    //verifica se está com o conteudo
    const dataEl = await screen.findByTitle("nome");
    expect(dataEl).toBeInTheDocument();
  });

  it("escrever cidade", async () => {
    const form = <Form />;
    render(form);

    const formEl = screen.getByTestId("form");
    const inputEl = screen.getByTitle("cidade");

    //digita o cidade
    userEvent.type(inputEl, "Hortolândia");

    //submete o formulario
    fireEvent.submit(formEl);

    //verifica se está com o conteudo
    const dataEl = await screen.findByTitle("cidade");
    expect(dataEl).toBeInTheDocument();
  });

  it("escrever email", async () => {
    const form = <Form />;
    render(form);
    const formEl = screen.getByTestId("form");
    const inputEl = screen.getByTitle("email");

    //digita o cidade
    userEvent.type(inputEl, "email");

    //submete o formulario
    fireEvent.submit(formEl);

    //verifica se está com o conteudo
    const emailEl = await screen.findByTitle("email");
    expect(emailEl).toBeInTheDocument();
  });

  it("escrever idade", async () => {
    const form = <Form />;
    render(form);

    const inputEl = screen.getByTitle("idade");

    //digita o idade
    userEvent.type(inputEl, "18");

    //submete o formulario
    const formEl = screen.getByTestId("form");
    fireEvent.submit(formEl);

    //verifica se está com o conteudo
    const idadeEl = await screen.findByTitle("idade");
    expect(idadeEl).toBeInTheDocument();
  });

  it("mostrar estado civil casado", async () => {
    const form = <Form />;
    render(form);
    const casado = await screen.findByTitle("casado");
    expect(casado).toBeInTheDocument();
  });

  it("mostar input conjuge", async () => {
    const form = <Form />;
    render(form);
    const casado = await screen.findByTitle("casado");
    userEvent.click(casado);

    const inputConjuge = await screen.findByTitle("nomeConjuge");
    expect(inputConjuge).toBeInTheDocument();
  });
});
