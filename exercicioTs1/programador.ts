interface Developer {
  nome: string;
  idade: number;
  empresa: string;
  famoso: boolean;
}

function programador(dev,produtos) {
  // não precisa desenvolver nada aqui
}
const dev: Developer = {
  nome: "Bill Gates",
  idade: 60,
  empresa: "Microsoft",
  famoso: true,
};
const produtos: string[] = ["Azure", "VS Code", "Office"];
programador(dev, produtos);
