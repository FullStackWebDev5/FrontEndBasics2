import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChildComponent from "./components/ChildComponent"

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Inside constructor");
    this.state = {
      count: 0,
			show: true,
    };
  }

  componentDidMount() {
    console.log("Inside componentDidMount");
    console.log("----------- MOUNTING FINISHED ----------");
  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate");
    console.log("----------- UPDATING FINISHED ----------");
  }

  render() {
    console.log("Inside render");
    return (
      <div className="App">
        <h1>App</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Increment
        </button>
				{this.state.show && <ChildComponent />}
				<button
          onClick={() =>
            this.setState((prevState) => ({ show: !prevState.count}))
          }
        >
          Show / Hide
        </button>
      </div>
    );
  }
}

export default App;

/*
	Component LifeCyle Phases:
	1. Mounting 
		(constructor => render => componentDidMount)
	2. Updating 
		([Listens to props/state updates] render (re-render) => componentDidUpdate)
	3. Unmounting 
		([Just before unmounting] componentWillUnmount)

	Component LifeCyle Methods:
	1. componentDidMount
		- API Calls
	2. componentDidUpdate
		- Code that needs to be executed whenever the component has re-rendered
	3. componentWillUnmount
		- Reset states, reset form fields
*/

/*
	import Navbar from './components/Navbar'
	import Products from './components/Products'
	<Navbar />
	<Products />
*/
