import React, { Component } from 'react'
import { connect } from 'react-redux'
import BalanceContainer from '../containers/BalanceContainer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BalanceContainer />
    )
  }
}

export default App
