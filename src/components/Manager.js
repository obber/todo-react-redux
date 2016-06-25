import React, { Component } from 'react'

class Manager extends Component {
  constructor() {
    super()

    this.state = {
      account: 'checking',
      amount: 0,
      action: 'deposit'
    }

    this.handleAccount = this.handleAccount.bind(this)
    this.handleAmount = this.handleAmount.bind(this)
    this.handleAction = this.handleAction.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAccount(e) {
    this.setState({account: e.target.value})
  }

  handleAmount(e) {
    this.setState({amount: parseInt(e.target.value)})
  }

  handleAction(e) {
    this.setState({action: e.target.value})
  }

  handleSubmit(e) {
    switch (this.state.action) {
      case 'deposit':
        this.props.deposit(this.state.amount, this.state.action);
        break
      case 'withdraw':
        this.props.withdraw(this.state.amount, this.state.action);
        break
      default:
        console.error('invalid action!!');
    }
  }

  render() {
    return (
      <div>
        <h1>Add Balance</h1>

            <h2>Select Account</h2>
            <input
              type="radio"
              value="checking"
              onChange={this.handleAccount}
              checked={"checking" === this.state.account}
            /> Checking
            <br />
            <input
              type="radio"
              value="savings"
              onChange={this.handleAccount}
              checked={"savings" === this.state.account}
            /> Savings

            <h2>Select Action</h2>
            <input
              type="radio"
              value="deposit"
              onChange={this.handleAction}
              checked={"deposit" === this.state.action}
            /> Deposit
            <br />
            <input
              type="radio"
              value="withdraw"
              onChange={this.handleAction}
              checked={"withdraw" === this.state.action}
            /> Withdraw

            <h2>Select Amount</h2>
            <input
              type="number"
              placeholder="00"
              value={this.state.amount}
              onChange={this.handleAmount}
            />
            <br />

            <input onClick={this.handleSubmit} type="button" value={this.state.action}/>
      </div>
    )
  }
}

export default Manager
