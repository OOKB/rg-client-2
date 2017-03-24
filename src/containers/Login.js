import { connect } from 'react-redux'
import { tokenReq } from 'cape-redux-auth'
import { mapStateToProps } from '../redux/select/trade'
import Component from '../components/Login'

const mapDispatchToProps = {
  login: tokenReq,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
