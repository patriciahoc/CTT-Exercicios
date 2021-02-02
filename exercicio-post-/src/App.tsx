import axios from "axios";
import React, { useRef } from "react";

function App() {
  let inputNome = useRef<HTMLInputElement>(null);
  let inputIdade = useRef<HTMLInputElement>(null);
  let inputEmpresa = useRef<HTMLInputElement>(null);
  let inputContato = useRef<HTMLInputElement>(null);

  const enviarInfo = () => {
    const nome = inputNome.current?.value;
    const idade = inputIdade.current?.value;
    const empresa = inputEmpresa.current?.value;
    const contato = inputContato.current?.value;

    const novoFun = {
      name: nome,
      age: idade,
      company: empresa,
      phone: contato,
    };
    axios.post("http://localhost:4000/usuarios/", novoFun);
  };

  return (
    <div className="App">
      <header>
        <h1>Formulário empresa</h1>
      </header>
      <section>
        <h4> Informe seu nome:</h4>
        <input type="text" placeholder="Nome" ref={inputNome} />
        <h4> Informe sua idade:</h4>
        <input type="text" placeholder="Idade" ref={inputIdade} />
        <h4> Informe a empresa:</h4>
        <input type="text" placeholder="Empresa" ref={inputEmpresa} />
        <h4> Informe seu telefone:</h4>
        <input type="text" placeholder="Telefone (DD)" ref={inputContato} />

        <button type="submit" onClick={enviarInfo}>
          Enviar
        </button>
      </section>
    </div>
  );
}

export default App;
