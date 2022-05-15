import React, { useState } from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../../redux'
import './index.css'

const Counter = ({ count, incrementCounter, decrementCounter }) => {
	const [inputNumber, setInputNumber] = useState(1)
	return (
    <>
      <div>Counter</div>
      <h1>{count}</h1>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(Number(e.target.value))}
      />
      <br />
      <br />
      <button onClick={() => incrementCounter(inputNumber)}>Increment</button>
      <button onClick={() => decrementCounter(inputNumber)}>Decrement</button>
    </>
  );
}

const mapStateToProps = (state) => {
	return {
		count: state.count.count
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    incrementCounter: (inputNumber) => dispatch(incrementCounter(inputNumber)),
    decrementCounter: (inputNumber) => dispatch(decrementCounter(inputNumber)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)