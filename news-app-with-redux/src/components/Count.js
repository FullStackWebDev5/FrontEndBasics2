import React from "react";
import { Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { incrementCounter } from '../redux/count/action'

const Count = ({ count, incrementCounter }) => {
  return (
    <>
      <h1 className="display-4">{count}</h1>
			<Button className="btn-dark" onClick={() => incrementCounter()}>Increment</Button>
    </>
  );
}

const mapStateToProps = (state) => {
	return {
		count: state.count
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		incrementCounter: () => dispatch(incrementCounter())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
