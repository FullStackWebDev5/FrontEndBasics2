import React, { Component } from 'react'

export class ChildComponent extends Component {
	constructor(props) {
    super(props);
    console.log("[CHILD] Inside constructor");
  }

	componentDidMount() {
    console.log("[CHILD] Inside componentDidMount");
    console.log("[CHILD] ----------- MOUNTING FINISHED ----------");
  }

	componentWillUnmount(){
		console.log("[CHILD] Inside componentWillUnmount");
		console.log("[CHILD] ----------- UNMOUNTING FINISHED ----------");
	}

	render() {
		console.log("[CHILD] Inside render");
		return (
			<div>ChildComponent</div>
		)
	}
}

export default ChildComponent