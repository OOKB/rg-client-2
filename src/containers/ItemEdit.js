import { connect } from 'react-redux'
import { confirmFavorite, endFavorite, favoriteItem } from 'cape-redux-collection'

import { itemDetailSelector as mapStateToProps } from '../redux/select/item'
import Component from '../components/Detail/Detail'

const mapDispatchToProps = { confirmFavorite, endFavorite, favoriteItem }

export default connect(mapStateToProps, mapDispatchToProps)(Component)
