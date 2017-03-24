import { connect } from 'react-redux'
import mapValues from 'lodash/mapValues'
import partial from 'lodash/partial'
import { close, open } from 'redux-field'

import { relatedSelector as mapStateToProps } from '../select/item'
import Component from '../components/Detail/Related'

function act(actions) {
  return mapValues(actions, func => partial(func, 'detail.related'))
}

const mapDispatchToProps = act({ close, open })

export default connect(mapStateToProps, mapDispatchToProps)(Component)
