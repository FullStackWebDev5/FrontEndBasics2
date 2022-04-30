import React, { Component } from "react";

export class ClassComponent1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message2: "Learning is awesome!",
      message3: "Life is good!",
    }
  }

  changeMessage3 = () => {
    this.setState({ message3: "Life is great!" })
  }

  changeMessage2n3 = () => {
    this.setState({
      message3: "Life is great!",
      message2: "Learning React is awesome!",
    });
  }

  render() {
    let { message } = this.props
    let { message2, message3 } = this.state
    return (
      <>
        <div>{message}</div>
        <div>{message2}</div>
        <div>{message3}</div>
        <button onClick={this.changeMessage3}>Change Message 3</button>
        <button onClick={this.changeMessage2n3}>Change Message 2 and 3</button>
      </>
    );
  }
}

export default ClassComponent1;

/* 
  - Direct state manipulations won't get detected by React,
  - State manipulations should always be done using setState method
  - setState method is asynchronous is nature
*/
