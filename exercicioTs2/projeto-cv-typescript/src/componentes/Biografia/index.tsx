import React from "react";
import { BioTypes } from "../../types/Biotypes";

function Bio(prop: BioTypes) {
  const { nome, ocupacao, resumo, perfilProfissional } = prop;

  return (
    <>
      <div className="biografia">
        <h1>{nome}</h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>
      <div className="titulo">
        Perfil <br /> Profissional
      </div>
      <div className="perfil-profissional">
        <p>{perfilProfissional}</p>
      </div>
    </>
  );
}
export default Bio;
