import Item from "./Item";

function App() {
  return (
    <>
      <h1>Lista de Compras</h1>
      <h3>Itens:</h3>
      <ul>
        <Item nome="arroz" />
        <Item nome="feijão" />
        <Item nome="açucar" />
        <Item nome="manteiga" />
        <Item nome="café" />
      </ul>
    </>
  );
}

export default App;
