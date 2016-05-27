import React, { Component } from 'react'

let Balance = ({ checking, savings }) => (
  <div>
    <h1>Current Balance</h1>
    <p>Checking: {checking}</p>
    <p>Savings: {savings}</p>
  </div>
)

export default Balance
