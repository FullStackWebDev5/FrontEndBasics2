import React from 'react';

const GrandChildComponent1 = ({ title, description }) => {
	return (
    <div className="GrandChildComponent1">
      <h3>{title}</h3>
      {description && <p>Description goes here - {description}</p>}
    </div>
  );
}

export default GrandChildComponent1

/* 
	Conditional Rendering - Control rendering of jsx based on a particular condition (with && operator)
*/
