import { connect } from 'react-redux'
import { property, unary } from 'lodash'
import { createStructuredSelector } from 'reselect'
import { editCollection, userCollections } from 'cape-redux-collection'

import Component from './ProjectsEl'

export const mapStateToProps = createStructuredSelector({
  lists: userCollections,
  editing: property('collection.collection'),
})
function save(list, title) {
  return {
    type: 'UPDATE_ENTITY',
    payload: { id: list.id, type: list.type, title },
  }
}
const mapDispatchToProps = {
  edit: unary(editCollection),
  save,
}
export default connect(mapStateToProps, mapDispatchToProps)(Component)
