import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/contato" exact component={Contact}/>
    <Route path="/portfolio" exact component={Portfolio}/>
  </Switch>

)



export default Routes