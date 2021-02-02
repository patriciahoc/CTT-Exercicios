import React from "react";
import { InformacaoTypes } from "../../types/informacao";

function Informacao(prop:InformacaoTypes) {

const {info} = prop

  return(
    <div>
      <ul>
        <li>Bairro: {info?.bairro}</li>
        <li>CEP: {info?.cep}</li>
        <li>complemento:{info?.complemento}</li>
        <li>DDD: {info?.ddd}</li>
        <li>Gia:{info?.gia}</li>
        <li>IBGE:{info?.ibge}</li>
        <li>Localidade:{info?.localidade}</li>
        <li>Logradouro: {info?.logradouro}</li>
        <li>Siafi:{info?.siafi}</li>
        <li>UF: {info?.uf}</li>
        
      </ul>
    </div>
  )
}
  
export default Informacao;
