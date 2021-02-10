import {Route, Switch} from "react-router-dom"
import Header from "./Componente/Header"
import Home from "./Componente/pages/Home"
import Login from "./Componente/pages/Login"


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/header" exact component={Header}/>
    <Route path="/login" exact component={Login}/>
    
    
  </Switch>

)



export default Routes