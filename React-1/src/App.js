import React, { Component } from 'react'
import './App.css';
import ChildComponent1 from './components/ChildComponent1/ChildComponent1'
import ChildComponent2 from './components/ChildComponent2'

class App extends Component {
  render(){
    return (
      <div className="App">
        App
        <ChildComponent1 />
        <ChildComponent2 />
      </div>
    );
  }
}

export default App;

/*
  REACT:
  Declarative Library
  - Tell react WHAT to do
  - Don't tell react HOW to do, react handles it

  JSX - JavaScript + XML

  Components - JavaScript Classes (Class Based Components) or Functions (Function based components) which returns JSX
  - Parts of UI
  - Can be nested
  - Can be re-used

  Fragments - Can be used to wrap adjancent JSX elements into one parent <></>
*/


// API - JSON (JavaScript Object Notation)

/*
  JSON
  {
    firstName: 'Vikrant',
    lastName: 'Mulankar'
  }

  XML
  <firstName>Vikrant</firstName>
  <lastName>Mulankar</lastName>
*/