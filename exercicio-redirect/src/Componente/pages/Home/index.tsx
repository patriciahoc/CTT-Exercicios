/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";

const Home = () => {
  let inputNome = useRef<HTMLInputElement>(null);
  let inputSenha = useRef<HTMLInputElement>(null);

  const [userlogado, setUserLogado] = useState<Boolean>(false);

  const [nome] = useState<String>("admin");
  const [senha] = useState<String>("admin");

  const getForm = () => {
    if (
      inputNome.current?.value === nome &&
      inputSenha.current?.value === senha
    ) {
      setUserLogado(true);
    } else {
      alert("Dados incorretos")
    }
  };

  return (
    <div className="navbar">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {userlogado  &&   <Redirect to="/login" />}
      <div className="form">
        
        
          <div className="form-item">
            <input
              type="text"
              placeholder="Digite seu login"
              name=""
              ref={inputNome}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              name=""
              ref={inputSenha}
            />
            <button type="submit" value="login" onClick={getForm}>
              Acessar
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default Home;
