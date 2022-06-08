import React from "react"
import './ChildComponent1.css'
import GrandChildComponent1 from "./GrandChildComponent1"

const ChildComponent1 = () => {
  // let mainDivStyle = { backgroundColor: '#eee' }
  return (
    <div className="ChildComponent1">
      <h2>Child Component 1</h2>
      <GrandChildComponent1 />
      <GrandChildComponent1 />
      <GrandChildComponent1 />
      <GrandChildComponent1 />
      <GrandChildComponent1 />
      <GrandChildComponent1 />
    </div>
  );
};

export default ChildComponent1;
