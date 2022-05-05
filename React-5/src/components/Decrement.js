import React from 'react'

function Decrement({ count, setCount }) {
  return (
    <button 
      onClick={() => setCount(count - 1)}
    >
      Decrement Count
    </button>
  )
}

export default Decrement