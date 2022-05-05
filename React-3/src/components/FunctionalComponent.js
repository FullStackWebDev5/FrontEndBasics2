import { useState } from "react";
import { Button } from "react-bootstrap";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="display-1">{count}</h1>
      <Button 
        variant="dark" 
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
    </div>
  );
};

export default FunctionalComponent;

/*
  Hooks were primarily introduced to create states in functional components (to make stateless components stateful)

  useState 
  - Create state
  - Returns an array of two elements - first element is state, second element is state handler

*/
