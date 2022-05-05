import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import Photos from "./components/Photos/Photos";
import FunctionalComponent from "./components/FunctionalComponentHooks";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Photos />
        <FunctionalComponent />
      </div>
    );
  }
}

export default App;
