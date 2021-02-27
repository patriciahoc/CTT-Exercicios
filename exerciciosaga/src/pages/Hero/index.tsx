import React, { useRef } from "react";
import { getHeroesRequest } from "../../store/ducks/hero/actions";
import { useDispatch } from "react-redux";

const Hero = () => {
  const dispatch = useDispatch();

  const buscarHeroes = () => {
    dispatch(getHeroesRequest(InputNome?.current?.value));
  };

  let InputNome = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1>FindHeroes</h1>
      <p>Pesquise sobre se super heroi favorito</p>
      <input
        type="text"
        name=""
        ref={InputNome}
        placeholder="Quem é o seu super heroi favorito?"
      />
      <button onClick={buscarHeroes}>
        <span></span>Pesquisar
      </button>
    </div>
  );
};

export default Hero;
