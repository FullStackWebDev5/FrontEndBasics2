import React, { Component } from 'react'

export class Toggle extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showTitle: true
		}
	}

	toggleHeading = () => {
		this.setState((prevState) => ({
			showTitle: !prevState.showTitle
		}))
	}

	render() {
		let { showTitle } = this.state
		return (
			<>
				{showTitle && (<h1>Heading</h1>)}
				<button onClick={this.toggleHeading}>Toggle</button>
			</>
		)
	}
}

export default Toggle