import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "Components/Nav";
import Home from "Screens/Home/Home";
import Desserts from "Screens/Desserts";
import FullMenu from "Screens/FullMenu";
import OrderNow from "Screens/OrderNow";
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
        <Route path="/fullmenu" component={FullMenu} />
        <Route path="/ordernow" component={OrderNow} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
