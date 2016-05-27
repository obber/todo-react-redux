import React, { Component } from 'react'

class Balance extends Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  render() {
    return (
      <h1>Add Balance</h1>
      <button onClick="{deposit}">+</button>
      <button onClick="{withdraw}">-</button>
    )
  }
}

export default Balance
