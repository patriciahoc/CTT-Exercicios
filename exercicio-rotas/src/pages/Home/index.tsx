import React from 'react'
import { Helmet } from 'react-helmet'
import Logo from "../../image/helo.png"


const Home = () => {
 return( 
   <>
  <Helmet><title>Home</title></Helmet>
  <div className="container-home">
  <div className="home">
    <img src={Logo} alt="Helo" />
    </div>
    <div className="home-desc">
      <p>Olá! Seja bem-vinde ao meu site</p>
    </div>
    </div>
  </>
 )
}
export default Home
