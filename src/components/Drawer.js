import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { entitySelector, entityUpdate } from '@kaicurry/redux-graph'
import { selectUser } from 'cape-redux-auth'
import { set } from 'cape-redux'

import Component from './DrawerEl'

export const mapStateToProps = createSelector(
  entitySelector({ type: 'HomeDrawer', id: 'newSite' }),
  selectUser,
  set('user')
)
function update(user, drawerId) {
  return entityUpdate({ type: user.type, id: user.id, drawer: { [drawerId]: true } })
}
const mapDispatchToProps = {
  onClose: update,
}
export default connect(mapStateToProps, mapDispatchToProps)(Component)
