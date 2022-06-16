import React, { Component } from 'react'

export class BulbOnOff extends Component {
	constructor(props) {
		super(props)

		this.state = {
			bulbStatus: false
		}
	}

	toggleBulb = () => {
		this.setState((prevState) => ({
			bulbStatus: !prevState.bulbStatus
		}))
	}

	render() {
		let { bulbStatus } = this.state
		return (
      <>
        <img
          src={
            bulbStatus
              ? "https://www.w3schools.com/js/pic_bulbon.gif"
              : "https://www.w3schools.com/js/pic_bulboff.gif"
          }
          alt="bulb"
          height="500"
          style={{ marginTop: "20px" }}
        />
        <button
          onClick={this.toggleBulb}
          style={{ padding: "10px 20px", margin: "20px auto", display: 'block' }}
        >
          Toggle Bulb
        </button>
      </>
    );
	}
}

export default BulbOnOff