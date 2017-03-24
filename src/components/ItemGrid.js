import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Item from './Item'

function ItemGrid({ items, missingImage, imgSize }) {
  return (
    <div className="items">
      <ul className="list-reset item-grid clearfix">
        {map(items, (item, index) => (
          <Item key={index} item={item} onError={missingImage} imgSize={imgSize} />
        ))}
      </ul>
      {(!items || !items.length) && <p className="homeHidden text-center p4">No Items</p>}
    </div>
  )
}

ItemGrid.propTypes = {
  imgSize: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  missingImage: PropTypes.func,
}

export default ItemGrid
