import React from "react";
import { useDispatch } from "react-redux";

const ContadorRemover = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "REMOVER" })}>Remover</button>
    </div>
  );
};
export default ContadorRemover;
