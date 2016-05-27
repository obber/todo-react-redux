import { DEPOSIT, WITHDRAW, TRANSFER } from '../actions'

const initialState = {
  checking: 0,
  savings: 0
}

const bankApp = (state = initialState, action) => {
  let toChange = {}

  switch (action.type) {
    case DEPOSIT:
      if (action.account === 'checking') {
        toChange.checking = state.checking + action.amount
      } else if (action.account === 'savings') {
        toChange.savings = state.savings + action.amount
      }
      return { ...state, ...toChange }

    case WITHDRAW:
      if (action.account === 'checking') {
        toChange.checking = state.checking - action.amount
      } else if (action.account === 'savings') {
        toChange.savings = state.savings - action.amount
      }
      return { ...state, ...toChange }

    case TRANSFER:
      toChange.checking =
        (action.from === 'checking') ? state.checking - action.amount : state.checking + action.amount
      toChange.savings =
        (action.from === 'savings') ? state.savings - action.amount : state.savings + action.amount
      return { ...state, ...toChange }

    default:
      return state
  }

  return state;
}      

export default bankApp
