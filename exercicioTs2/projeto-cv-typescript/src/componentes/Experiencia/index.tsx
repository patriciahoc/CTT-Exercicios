import React from "react";
import { ExperienciaTypes } from "../../types/ExperienciaType";

function Experiencia(props: ExperienciaTypes) {
  return (
    <div className="experience">
      <h2>Experiência Profissional</h2>
      {props.experiencia.map(
        ({ id, cargo, periodo, empresa, local, conteudo }) => (
          <div className="experience-item">
            <div key={id}>
              <h4>{cargo}</h4>
              <span>{periodo}</span>

              <strong>{empresa}</strong>
              <span>{local}</span>
            </div>
            <p>{conteudo}</p>
          </div>
        )
      )}
    </div>
  );
}

export default Experiencia;
