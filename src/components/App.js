import React, { Component } from 'react'
import { connect } from 'react-redux'
import BalanceContainer from '../containers/BalanceContainer'
import BalanceManager from '../containers/BalanceManager'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <BalanceContainer />
        <BalanceManager />
      </div>
    )
  }
}

export default App
