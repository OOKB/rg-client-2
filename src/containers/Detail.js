import { connect } from 'react-redux'
import { close, open } from 'redux-field'
import { confirmFavorite, endFavorite, favoriteItem } from 'cape-redux-collection'

import { itemDetailSelector as mapStateToProps } from '../select/item'
import { detailClose } from '../dispatch/items'
import Component from '../components/Detail/Detail'

const mapDispatchToProps = { close, confirmFavorite, detailClose, endFavorite, favoriteItem, open }

export default connect(mapStateToProps, mapDispatchToProps)(Component)
