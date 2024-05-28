import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  console.log("kavya");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
