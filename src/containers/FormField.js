import { connect } from 'react-redux'
import { flow, property } from 'lodash'
import { getFormEvents, getState } from 'redux-field'
import { mapDispatchToProps } from 'cape-redux'

import Component from '../components/Fields/Input'

// Used for login.

const formEventActions = mapDispatchToProps(flow(property('prefix'), getFormEvents))

export default connect(getState, formEventActions)(Component)
