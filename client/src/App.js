import React from "react";
import Navb from "./components/Nav"
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navb />
          <Switch>
              <Route exact path="/" component ={Home}/> 
              <Route exact path="/saved" component={Saved} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
