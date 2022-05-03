import React, { Component } from "react";

class BulbOnOff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bulbStatus: false,
    };
  }

  turnBulbOn = () => {
    this.setState({
      bulbStatus: true,
    });
  };

  turnBulbOff = () => {
    this.setState({
      bulbStatus: false,
    });
  };

  turnBulbOnOff = () => {
    this.setState((prevState) => ({
      bulbStatus: !prevState.bulbStatus,
    }));
  }

  render() {
    let bulbOffImg = "https://www.w3schools.com/js/pic_bulboff.gif";
    let bulbOnImg = "https://www.w3schools.com/js/pic_bulbon.gif";
    let { bulbStatus } = this.state;

    return (
      <>
        <img
          src={bulbStatus ? bulbOnImg : bulbOffImg}
          height="500"
          alt="bulb"
        />
        <br />
        <br />
        <br />
        <button
          style={{
            padding: "10px 15px",
            fontSize: "2em",
            marginRight: "10px",
          }}
          onClick={this.turnBulbOn}
        >
          On
        </button>
        <button
          style={{
            padding: "10px 15px",
            fontSize: "2em",
          }}
          onClick={this.turnBulbOff}
        >
          Off
        </button>
        <br />
        <br />
        <br />
        <button
          style={{
            padding: "10px 15px",
            fontSize: "2em",
          }}
          onClick={this.turnBulbOnOff}
        >
          {this.state.bulbStatus ? 'Turn Off' : 'Turn On'}
        </button>
      </>
    );
  }
}

export default BulbOnOff;
