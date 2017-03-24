import { connect } from 'react-redux'
import mapValues from 'lodash/mapValues'
import partial from 'lodash/partial'
import { close, open } from 'redux-field'

import { relatedSelector as mapStateToProps } from '../redux/select/item'

function act(actions) {
  return mapValues(actions, func => partial(func, 'detail.related'))
}

const mapDispatchToProps = act({ close, open })

import Component from '../components/Detail/Related'

export default connect(mapStateToProps, mapDispatchToProps)(Component)
