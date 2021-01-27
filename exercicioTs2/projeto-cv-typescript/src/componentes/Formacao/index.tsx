import React from "react";
import { FormacaoTypes } from "../../types/formacaotypes";

function Formacao(props: FormacaoTypes) {
  return (
    <div className="sidebar">
      <h3>Educação</h3>
      <div className="lista-de-formacao">
        {props.educacao.map(({ id, curso, instituicao }) => (
          <li key={id}>
            <h4>{instituicao}</h4>
            <p>{curso}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Formacao;
