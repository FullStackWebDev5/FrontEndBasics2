import React from 'react';

const Counter = () => {
	const incrementCounter = () => {
		console.log(0 + 1)
	}

	return (
		<div>
			<h1>Counter</h1>
			<p style={{ fontSize: '15em', margin: 0 }}>0</p>
			<button onClick={incrementCounter} >Increment</button>
		</div>
	)
}

export default Counter