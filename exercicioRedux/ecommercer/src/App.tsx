import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ContadorAdicionar from "./componentes/ContadorAdicionar";
import ContadorRemover from "./componentes/ContadorRemover";
import Contagem from "./componentes/Contagem";

interface Cont {
  contador: number;
}
const initialstate: Cont = {
  contador: 0,
};

function reducer(state = initialstate, action: any) {
  switch (action.type) {
    case "ADICIONAR":
      return {
        contador: state.contador + 1,
      };
    case "REMOVER":
      return {
        contador: state.contador > 0 ? state.contador - 1 : state.contador,
      };
    default:
      return state;
  }
}

const contador = createStore(reducer);

function App() {
  return (
    <Provider store={contador}>
      <ContadorAdicionar />
      <Contagem />
      <ContadorRemover />
    </Provider>
  );
}

export default App;
