import React from "react";
import { useSelector } from "react-redux";
import { HeroesState } from "../../store/ducks/hero/types";

const Home = () => {
  const heroes: HeroesState = useSelector((state: any) => state.heroesReducer);
  console.log("component", heroes);
  return (
    <div>
      {heroes.loading && <h2>carregando</h2>}
      {heroes.error && <h2>ocorreu um erro</h2>}
      {heroes.dataHero && heroes.dataHero.length === 0 && (
        <h2>nenhum herói encontrado</h2>
      )}
      {heroes.dataHero &&
        heroes.dataHero.map(({ id, name, image }) => (
          <div key={id}>
            <p>{name}</p>
            <img src={image.url} alt="" />
          </div>
        ))}
    </div>
  );
};

export default Home;
