import React, { Component } from 'react'

export class ClassComponent1 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { message } = this.props
    return (
      <div>{message}</div>
    )
  }
}

export default ClassComponent1