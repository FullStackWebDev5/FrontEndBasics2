import React from 'react'

const StudentIntroduction = ({firstName, lastName, batchNo, hobbies}) => {
  return (
    <>
      <h1>
        {firstName.toLowerCase()} {lastName && lastName.toLowerCase()}
      </h1>
      {batchNo && <h3>Batch No: {batchNo}</h3>}
      <ol>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ol>
    </>
  );
}

export default StudentIntroduction

// Conditional Rendering - Render based on condition 
// Syntax - {condition && (JSX)}

// Lists and Keys
// - Use map method
// - Specify keys for each returned jsx (can use index of map if no uniques data available for each iteration)