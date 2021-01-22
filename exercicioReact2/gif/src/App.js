import React, { useState } from "react";
import "./App.css";
import MostraGIF from "./componentes/MostraGif";

function App() {
  const [mostrarGIF, adicionarGIF] = useState(false);

  const apareceGIF = () => {
    adicionarGIF(!mostrarGIF);
  };
  return (
    <div className="App">
      <button onClick={apareceGIF}>Clique aqui</button>

      {mostrarGIF && <MostraGIF />}
    </div>
  );
}

export default App;
