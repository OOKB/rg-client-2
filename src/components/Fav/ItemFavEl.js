import React, { PropTypes } from 'react'
import { getListCollectionId } from 'cape-redux-collection'

import Alert from './FavAlert'
import FavButton from './Button'
import Overview from './Overview'

function getListItem(collections, listItem) {
  if (!listItem) return null
  const collectionId = getListCollectionId(listItem)
  const list = collections[collectionId]
  return { ...listItem, list }
}
function ItemFavEl(props) {
  const {
    activeListItem, collections, editItemCollections,
    itemInFavs, item, itemIsActive, userCollections,
  } = props
  const listItem = getListItem(collections, activeListItem)
  function getAlert() {
    if (listItem) return <Alert item={item} listItem={listItem} />
    if (itemIsActive) return <Overview {...{ collections, item, userCollections }} />
    return null
  }
  return (
    <div className="favorite-container">
      {getAlert()}
      <FavButton inCollections={itemInFavs} onClick={editItemCollections} />
    </div>
  )
}

ItemFavEl.propTypes = {
  activeListItem: PropTypes.object,
  collections: PropTypes.object,
  editItemCollections: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  itemInFavs: PropTypes.bool.isRequired,
  itemIsActive: PropTypes.bool,
  userCollections: PropTypes.object,
}

export default ItemFavEl
