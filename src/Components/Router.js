import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "Components/Nav";
import Home from "Screens/Home/Home";
import Desserts from "Screens/Desserts";
import Fullmenu from "Screens/Fullmenu";
import Ordernow from "Screens/Ordernow";
import SliderBar from "Components/SliderBar";

export default ({ isOpen, setIsOpen }) => {
  return (
    <Router>
      <Nav setIsOpen={setIsOpen} />
      <SliderBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home isOpen={isOpen} setIsOpen={setIsOpen} />
        </Route>
        <Route path="/desserts" component={Desserts} />
        <Route path="/fullmenu" component={Fullmenu} />
        <Route path="/ordernow" component={Ordernow} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
