import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import map from 'lodash/map'

import { detailFields } from '../select/item'
import ItemFav from './Fav/ItemFav'

function Info({ item, fields }) {
  return (
    <div className="item-information z3 relative">
      <ItemFav item={item} />
      <ul className="list-reset bb1">
        {map(fields, ({ value, label }) => (
          <li key={value} className={value}>
            <h3 className="m0 uppercase small">{label}</h3>
            <p className="m0">{item[value]}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

Info.propTypes = {
  item: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
}
Info.defaultProps = {}

export default connect(detailFields)(Info)
