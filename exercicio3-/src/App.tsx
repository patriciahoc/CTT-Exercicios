import { useState } from "react";
import axios from "axios";
import Informacao from "./componentes/Informacoes";
import { Info } from "./types/informacao";

function App() {
  const [CEP, setCEP] = useState("");
  const [info, setInfo] = useState<Info>();

  function getBuscar() {
    axios
      .get(`https://viacep.com.br/ws/${CEP}/json/`)
      .then((resposta) => setInfo(resposta.data));
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => setCEP(event.target.value)} />

      <button onClick={getBuscar}>Pesquisar</button>

      {info && (
        <div>
          <ul>
            <Informacao info={info} />
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
