import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Manager from '../components/Manager'

const mapStateToProps = (state) => {
  return state
}

const BalanceManager = connect(
  mapStateToProps
)(Manager)

export default BalanceManager
