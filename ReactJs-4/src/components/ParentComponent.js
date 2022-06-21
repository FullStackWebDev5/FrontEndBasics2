import { useState, useEffect } from "react";

import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const [count, setCount] = useState(0);
	const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("[ParentComponent] Component Mounted!");
  }, []);

  useEffect(() => {
    console.log("[ParentComponent] Component Updated!");
  }, [count]);

  return (
    <>
      <div>ParentComponent</div>
      <h1>{count}</h1>
      <button 
				onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
			<button 
				onClick={() => setShow((prevShow) => !prevShow)}>
        Hide/Show
      </button>
      {show && <ChildComponent />}
    </>
  );
};

export default ParentComponent;

/*
	useEffect(() => {

	},[])
	first argument is callback function
	second argument is dependency arrays (To trigger callback whenever any state inside dependency array changes)

	useEffect hook can be used to replicate all 3 life cycle methods in functional components - 
	1. componentDidMount (Dependency array is empty)
		useEffect(() => {

		}, [])
	
	2. componentDidUpdate
		useEffect(() => {

		}, [state1, state2])

	3. componentWillUnmount
		useEffect(() => {
			return () => {
				console.log("[ChildComponent] Component will unmount now ...");
			}
		}, []);
*/
