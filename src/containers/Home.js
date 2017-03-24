import { connect } from 'react-redux'

import { homeSelector as mapStateToProps } from '../select/home'

import { missingImage } from '../dispatch/items'
import Component from '../components/Home'

const mapDispatchToProps = { missingImage }
export default connect(mapStateToProps, mapDispatchToProps)(Component)
