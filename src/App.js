import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/NavBar/Home";
import About from "./components/NavBar/About";
import Schedule from "./components/NavBar/Schedule";
import Prices from "./components/NavBar/Prices";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <Routes>
            <Route path="/home" exact Component={Home} />
            <Route path="/about" exact Component={About} />
            <Route path="/prices" exact Component={Prices} />
            <Route path="/schedule" exact Component={Schedule} />
          </Routes>
        </NavBar>
      </Router>
    </div>
  );
}

export default App;
