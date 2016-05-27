// action types:

export const DEPOSIT = 'DEPOSIT'
export const WITHDRAW = 'WITHDRAW'
export const TRANSFER = 'TRANSFER'

// helper that returns action creator:

const bankAction = (type) => {
  return (amount, account) => {
    return {
      type,
      amount,
      account
    }
  }
}

// action creators:

export const deposit = bankAction(DEPOSIT)
export const withdraw = bankAction(WITHDRAW)
export const transfer = (amount, from, to) => {
  return {
    type: TRANSFER,
    amount,
    from,
    to
  }
}
