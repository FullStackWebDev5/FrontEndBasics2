const Increment = ({ count, setCount }) => {
  return (
    <button 
      onClick={() => setCount(count + 1)}
    >
      Increment Count
    </button>
  )
};

export default Increment;
