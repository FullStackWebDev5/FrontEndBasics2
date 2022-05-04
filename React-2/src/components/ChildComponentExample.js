import React, { Component } from 'react'

export class ChildComponentExample extends Component {
  componentDidMount() {
    console.log('Inside componentDidMount - Child Component')
  }

  componentWillUnmount() {
    console.log('Inside componentWillUnmount - Child Component')
  }

  render() {
    return (
      <div>ChildComponentExample</div>
    )
  }
}

export default ChildComponentExample