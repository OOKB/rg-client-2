import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

import ItemImg from './ItemImg'

function getImgExt(categoryCode) {
  if (categoryCode === 'P') return '?w=1500&h=600&fit=fill&bg=FFF'
  return '?w=500&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=2'
}
function FilmStripNavItem({ categoryCode, onClick, ...props }) {
  return (
    <li onClick={onClick} role="button" className="button left">
      <div className="wrap">
        <ItemImg
          {...props}
          imgixExt={getImgExt(categoryCode)}
        />
      </div>
    </li>
  )
}

FilmStripNavItem.propTypes = {
  categoryCode: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default connectField()(FilmStripNavItem)
