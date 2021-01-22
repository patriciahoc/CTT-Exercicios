import React, { useState } from "react";
import "./App.css";
import MostraGIF from "./componentes/MostraGif";

function App() {
  const [mostrarGIF, adicionarGIF] = useState(false);

  const apareceGIF = () => {
    adicionarGIF(true);
  };
  const desapareceGIF = () => {
    adicionarGIF(false);
  }
  return (
    <div className="App">
      <button onClick={apareceGIF}>Clique aqui</button>

      {mostrarGIF && <MostraGIF desaparecer = {desapareceGIF} />}
    </div>
  );
}

export default App;
