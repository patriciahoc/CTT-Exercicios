import { Route, Switch } from "react-router-dom";

import Hero from "./pages/Hero";
import Home from "./pages/Home";

const Routes = () => (
  <Switch>
    <Route path="/search" exact component={Hero} />
    <Route path="/Hero" exact component={Home} />
  </Switch>
);
export default Routes;
