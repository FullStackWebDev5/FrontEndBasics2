import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ 
      count: prevState.count + 1 
    }))
  }

  decrementCounter = () => {
    this.setState((prevState) => ({ 
      count: prevState.count - 1 
    }))
  }

  incrementBy5Counter = () => {
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
  }

  render() {
    const styles = {
      counter: {
        fontSize: "25em",
      },
      incrementDecrementButton: {
        padding: "10px 15px",
        fontSize: "2em",
      },
    };

    let { count } = this.state;

    return (
      <>
        <div style={styles.counter}>{count}</div>
        <button
          style={styles.incrementDecrementButton}
          onClick={this.incrementCounter}
        >
          Increment
        </button>
        <button
          style={styles.incrementDecrementButton}
          onClick={this.decrementCounter}
        >
          Decrement
        </button>
        <button
          style={styles.incrementDecrementButton}
          onClick={this.incrementBy5Counter}
        >
          Increment by 5
        </button>
      </>
    );
  }
}

export default Counter;

/*
    <div style={{ fontSize: "25em" }}>0</div>
    <button style={{ padding: "10px 15px", fontSize: "2em" }}>
      Increment
    </button>
*/
