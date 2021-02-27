import axios from "axios";
import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";



const Home = () => {
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputSenha = useRef<HTMLInputElement>(null);

  const [logado, setLogado] = useState(false);

  const postCadastrar = () => {
    const requisicao = {
      email: inputEmail.current?.value,
      password: inputSenha.current?.value,
    };

    axios.post("http://localhost:4000/users", requisicao)
    .then(resposta => {
      localStorage.setItem("token", resposta.data.accessToken);
      setLogado(true);
    });
  };

  return (
    <div className="container-form">
      <h1>Store Garage</h1>
      <p>Cadastre-se e encontre as melhores ofertas</p>
      <div className="form-item">
        <input type="email" placeholder="Digite seu email" ref={inputEmail} />
        <input
          type="password"
          placeholder="Digite sua senha"
          ref={inputSenha}
        />
      </div>
      <div className="form-button">
        <button onClick={postCadastrar}>Cadastrar</button>
        {logado && <Redirect to="/produtcs" />}
      </div>
    </div>
  );
};
export default Home;
