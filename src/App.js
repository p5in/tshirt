import React, { Component } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/project/Projects";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Dashboard />
          <Projects />
        </div>
      </Router>
    );
  }
}
export default App;
