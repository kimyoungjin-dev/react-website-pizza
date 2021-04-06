import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "Screens/Home";
import Nav from "Components/Nav";

export default () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
