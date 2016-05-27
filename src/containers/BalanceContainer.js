import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Balance from '../components/Balance'

const mapStateToProps = (state) => {
  return state
}

const BalanceContainer = connect(
  mapStateToProps
)(Balance)

export default BalanceContainer
