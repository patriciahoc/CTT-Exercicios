import React from 'react'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return(
    <div>
      <Helmet><title>Contato</title></Helmet>
      <h2> Meus Contatos: </h2>
      <ul>
        <li>WhatsApp:</li>
        <li>E-mail</li>
        <li>Linkedin:</li>
        <li>Github: </li>
      </ul>
    </div>
  )
}
export default Contact