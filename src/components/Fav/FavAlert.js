import { flow, get, partial } from 'lodash'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { confirmItem } from 'cape-redux-collection'
import { saveListItemField } from '../../redux/collection'
import Component from './FavAlertEl'

function fieldInfo(dispatch, listItem, fieldId) {
  const prefix = [ listItem.type, listItem.id ]
  const info = {
    id: `${listItem.id}-${fieldId}`,
    fieldId,
    prefix: prefix.concat(fieldId),
    value: listItem[fieldId],
  }
  info.onSubmit = flow(saveListItemField(info, listItem), dispatch)
  return info
}
function getSchema(dispatch, listItem) {
  const info = partial(fieldInfo, dispatch, listItem)
  return {
    description: {
      ...info('description'),
      description: 'Notes about item within collection.',
      label: 'Notes',
    },
    position: {
      ...info('position'),
      description: 'Position within list.',
      label: 'Position',
    },
  }
}
function getMessage(state, { item, listItem }) {
  return `${item.id} has been added to your ${get(listItem, 'list.title', '')} collection!`
}
const getState = createStructuredSelector({
  message: getMessage,
})

function mapDispatchToProps(dispatch, { listItem }) {
  return {
    onClose: flow(partial(confirmItem, listItem), dispatch),
    schema: getSchema(dispatch, listItem),
  }
}

export default connect(getState, mapDispatchToProps)(Component)
