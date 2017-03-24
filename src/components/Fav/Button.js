import React, { PropTypes } from 'react'
import ButtonEl from '../Button'

function FavButton({ inCollections, onClick }) {
  if (inCollections) {
    return (
      <ButtonEl
        className="favorite"
        icon="minus-btl"
        onClick={onClick}
        title="Remove this item from favorites"
      />
    )
  }
  return (
    <ButtonEl
      className="favorite"
      icon="plus-btl"
      onClick={onClick}
      title="Favorite this item"
    />
  )
}

FavButton.propTypes = {
  inCollections: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default FavButton
