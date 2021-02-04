import React from "react";
import { useSelector } from "react-redux";

const Contagem = () => {
  const contagem = useSelector((state: any) => state.contador);
  return <span>Contagem: {contagem}</span>;
};
export default Contagem;
