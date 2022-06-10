import React from 'react'
import './GrandChildComponent1.css'

const GrandChildComponent1 = ({ title, description, backgroundColor }) => {
	return (
    <div 
			className="GrandChildComponent1" 
			style={{ backgroundColor: backgroundColor }}
		>
      <h3>{title}</h3>
      {description && <p>Description goes here - {description}</p>}
    </div>
  );
}

export default GrandChildComponent1

/* 
	Conditional Rendering - Control rendering of jsx based on a particular condition (with && operator)
*/
