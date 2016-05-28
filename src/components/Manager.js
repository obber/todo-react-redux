import React, { Component } from 'react'

class Manager extends Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>Add Balance</h1>
        <button onClick="{deposit}">+</button>
        <button onClick="{withdraw}">-</button>
      </div>
    )
  }
}

export default Manager
