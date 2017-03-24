import get from 'lodash/get'
import { createStructuredSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import { getSchema } from './schema'

export function selectEntityById(state, id) {
  return entitySelector(state)[id]
}

export function editingId(state) {
  return get(state, 'form.edit.button.value', null)
}
export function editingEntity(state) {
  const id = editingId(state)
  return (id && selectEntityById(state, id)) || null
}
export const editorSelector = createStructuredSelector({
  entity: editingEntity,
  schema: getSchema,
})
