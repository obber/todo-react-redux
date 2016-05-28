import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deposit, withdraw } from '../actions'
import Manager from '../components/Manager'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deposit, withdraw }, dispatch);
}

const BalanceManager = connect(
  null,
  mapDispatchToProps
)(Manager)

export default BalanceManager
