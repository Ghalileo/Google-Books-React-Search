import React, { Component } from "react";
import Navb from "./components/Nav"
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navb />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  )
}

export default App;
