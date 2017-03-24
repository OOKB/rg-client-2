import { connect } from 'react-redux'
import { flow, map, partial } from 'lodash'
import { createStructuredSelector } from 'reselect'
import {
  createItemThunk, close, endItem, itemCollections, itemCollectionsHash,
} from 'cape-redux-collection'
import { createCollection } from '../../redux/collection'

import Component from './OverviewEl'

function getMessage(state, { item }) {
  return `Add ${item.id} to one of your collections.`
}
const getState = createStructuredSelector({
  itemCollections,
  itemCollectionsHash,
  message: getMessage,
})
function getAction(list, item) {
  if (list.itemListId) return partial(endItem, { id: list.itemListId })
  return partial(createItemThunk, { mainEntity: list, item })
}
function mapDispatchToProps(dispatch, { collections, item }) {
  function collectionPick(collection) {
    return {
      id: collection.id,
      itemListId: collection.itemListId,
      title: collection.title,
      onClick: flow(getAction(collection, item), dispatch),
    }
  }
  return {
    createCollection: createCollection(dispatch),
    onClose: flow(close, dispatch),
    userCollections: map(collections, collectionPick),
  }
}

export default connect(getState, mapDispatchToProps)(Component)
