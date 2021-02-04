import React from "react";
import { useDispatch } from "react-redux";

const ContadorAdicionar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADICIONAR" })}>Adicionar</button>
    </div>
  );
};
export default ContadorAdicionar;
