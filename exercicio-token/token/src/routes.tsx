import { Switch, Route } from 'react-router-dom'

import Home from './Componentes/Home'
import Products from './Componentes/Produtos'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Products} />
    </Switch>
  )
}

export default  Routes
