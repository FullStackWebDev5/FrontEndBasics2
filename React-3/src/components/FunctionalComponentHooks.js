import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("Inside componentDidMount")
  }, [])

  useEffect(() => {
    console.log("Inside componentDidUpdate")
  }, [count])

  return (
    <div>
      <h1 className="display-1">{count}</h1>
      <Button 
        variant="dark" 
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
      <br />
      <br />
      <br />
      {show && <h1>Hello World</h1>}
      <Button 
        variant="dark"
        onClick={() => setShow(!show)}
      >
        {show ? 'Hide' : 'Show'} Hello World
      </Button>
    </div>
  );
};

export default FunctionalComponent;

/*
  Hooks were primarily introduced to create states in functional components (to make stateless components stateful)

  useState 
  - Create state
  - Returns an array of two elements - first element is the state, second element is state handler
  - You can specify the default value of the state in parenthesis

  useEffect
  - Managing/ Replicating all life cycle methods in functional components
  - 2 parameters: first is callback, second is dependency array

  - If dependency array is empty -> componentDidMount
  - If dependency array has any state(s) -> componentDidUpdate (only for those state(s))
  - If you return another callback -> componentWillUnmount
*/
