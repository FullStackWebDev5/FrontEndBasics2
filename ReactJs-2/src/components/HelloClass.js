import React, { Component } from 'react';

class HelloClass extends Component {
	constructor(props) {
		super(props)

		this.state = {
			batchNo: 10,
			country: 'India'
		}
	}

	changeBatchNo = () => {
		this.setState({
			batchNo: 9
		})
	}

	changeCountry = () => {
		this.setState({
			country: 'US'
		})
	}

	render() {
		const { student1, student2 } = this.props
		const { batchNo, country } = this.state
		return (
			<>
				<h1>Hello {student1} {student2 && `and ${student2}`}</h1>
				<h2>Current Batch: {batchNo}</h2>
				<h2>Country of residence: {country}</h2>
				<button onClick={this.changeBatchNo}>Change Batch Number</button>
				<button onClick={this.changeCountry}>Change Country</button>
			</>
		)
	}
}

export default HelloClass