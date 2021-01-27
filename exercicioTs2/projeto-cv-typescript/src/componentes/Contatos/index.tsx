import React from "react";
import { ContatosTypes } from "../../types/ContatosTypes";

function Contatos(props: ContatosTypes) {
  return (
    <div className="lista-de-contatos">
      {props.contatos.map(({ id, tipo, contato }) => (
        <li key={id}>
          <div className="item-contato">
            <h4>{tipo}</h4>
            <p>{contato}</p>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Contatos;
