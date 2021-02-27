import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { ProdutosTypes } from "../types/produtosTypes";

const Products = () => {
  const [produtos, setProdutos] = useState<ProdutosTypes[]>([]);
  const token = localStorage.getItem("token");
 

  useEffect(() => {
    if (token !== null) {
      const headers = {
        "Authorization": `Bearer ${token}`,
      };

      axios
        .get("http://localhost:4000/products", { headers: headers })
        .then((resposta) => setProdutos(resposta.data));
    }
  }, []);

  return (
    <div className="container-produto">
      {produtos !== undefined &&
        produtos.map((item: any) => (
          <div key={item.id} className="lista-produto">
            <ul>
              <li>
                <strong>{item.title}</strong>
                <img src={item.image} alt="" />
                <p>{item.description}</p>
                <p>{item.price}</p>
              </li>
            </ul>
          </div>
        ))}
      {token === null && <Redirect to="/" />}
    </div>
  );
};
export default Products;
