import React, { Component } from 'react'
import GrandChildComponent1 from './GrandChildComponent1'

class ChildComponent1 extends Component {
  render(){
    return(
      <div className="ChildComponent1">
        Child Component 1
        <GrandChildComponent1 />
        <GrandChildComponent1 />
      </div>
    )
  }
}

export default ChildComponent1