import React from 'react'

const HOC = (props) => {
	return (
		<div style={{ backgroundColor: 'red' }}>
			<props.component />
		</div>
	)
}

export default HOC