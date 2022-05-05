import { useState } from "react";
import "./App.css";
// import Increment from './components/Increment'
// import Decrement from './components/Decrement'
import Increment2 from './components/Increment2'

function App() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <div style={{ fontSize: "20em" }}>{count}</div> */}
      {/* <Increment count={count} setCount={setCount} />
      <Decrement count={count} setCount={setCount} /> */}
      
      <div style={{ fontSize: "20em" }}>{count}</div>
      <Increment2 count={count} setCount={setCount} />
    </div>
  );
}

export default App;

/* 
  When a child component requires access to parent component state as well as state handler, send the state down to child components as props 

  PROPS DRILLING:
  Passing down parent component state down the hierarchy up till the child component which requires access to those states (In this process, these props also pass through those components which don't actually require that state)

  LIFTING THE STATE UP:
  When parent component/ some other component down the hierarchy in some other branch of the tree requires the private state, we need to 'lift the state up' (i.e, make the state as state of the parent component) and pass it as props to all the components which require it.
*/
