import React, { useState } from "react";

const Lista = () => {
  const [item, setItem] = useState<string>("");
  const [itens, setItens] = useState<string[]>([]);

  const mostrarItens = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setItem(event.target.value);

  const formSubmit = (event: any) => {
    event.preventDefault();
    setItens([...itens, item]);
    setItem("");
  };
  return (
    <div className="lista">
      <form onSubmit={formSubmit} className="form-container">
        <input
          onChange={mostrarItens}
          placeholder="digite um item"
          type="text"
          value={item}
        />
        <button>Adicionar</button>
      </form>
      <table>
        <thead>
          <tr>Lista de compras</tr>
        </thead>
        <tbody>
          {itens.map((i) => (
            <tr key={i}>
              <td>{i}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Lista;
