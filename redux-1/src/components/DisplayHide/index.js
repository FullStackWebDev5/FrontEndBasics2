import React from 'react'
import { toggleDisplayHide } from '../../redux'
import { connect } from 'react-redux'

const DisplayHide = ({ display, toggleDisplayHide }) => {
	return (
		<div>
			{display && <h1>Hello world</h1>}
			<button onClick={toggleDisplayHide}>Show/Hide</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		display: state.displayHide.display
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDisplayHide: () => dispatch(toggleDisplayHide())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayHide)