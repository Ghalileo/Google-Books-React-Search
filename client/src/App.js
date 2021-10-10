import React, { Component } from "react";
import Navb from "./components/Nav"
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <Router>
    <Navb />
      <Switch>
        
          <Route exact path="/" component ={Home}/>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
    </>
  )
}

export default App;
