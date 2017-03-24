import { connect } from 'react-redux'
import { endFavorite } from 'cape-redux-collection'

import { editorSelector as mapStateToProps } from '../redux/select/editor'
import Component from '../components/Editable/Editor'

const mapDispatchToProps = { endFavorite }

export default connect(mapStateToProps, mapDispatchToProps)(Component)
