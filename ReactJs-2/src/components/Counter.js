import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

	decrementCounter = () => {
		this.setState({
			count: this.state.count - 1,
		})
	}

	increment5Counter = () => {
		this.incrementCounter()
		this.incrementCounter()
		this.incrementCounter()
		this.incrementCounter()
		this.incrementCounter()
	}

  render() {
    let { count } = this.state;
    return (
      <div>
        <p style={{ fontSize: "20em", margin: "0" }}>{count}</p>
        <button
          onClick={this.incrementCounter}
          style={{ fontSize: "20px", padding: "10px" }}
        >
          Increment
        </button>
				<button
          onClick={this.decrementCounter}
          style={{ fontSize: "20px", padding: "10px" }}
        >
          Decrement
        </button>
				<br /><br />
				<button
          onClick={this.increment5Counter}
          style={{ fontSize: "20px", padding: "10px" }}
        >
          Increment 5
        </button>
      </div>
    );
  }
}

export default Counter;
