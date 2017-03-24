import { connect } from 'react-redux'

import { homeSelector as mapStateToProps } from '../redux/select/home'

import { missingImage } from '../redux/dispatch/items'
import Component from '../components/Home'

const mapDispatchToProps = { missingImage }
export default connect(mapStateToProps, mapDispatchToProps)(Component)
