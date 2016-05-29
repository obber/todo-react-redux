import React, { Component } from 'react'

class Manager extends Component {
  constructor() {
    super()
    this.deposit = this.deposit.bind(this)
    this.withdraw = this.withdraw.bind(this)
  }

  deposit() {
    this.props.deposit(10, 'checking')
  }

  withdraw() {
    this.props.withdraw(10, 'checking')
  }

  render() {
    return (
      <div>
        <h1>Add Balance</h1>
        <button onClick={this.deposit}>+</button>
        <button onClick={this.withdraw}>-</button>
      </div>
    )
  }
}

export default Manager
