import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

import FilmStripItem from './FilmStripItem'
import FilmStripNavItem from './FilmStripNavItem'

function FilmStrip({ active, formEvent: { onChange }, next, previous }) {
  function clickPrev() { onChange(previous.index) }
  function clickNext() { onChange(next.index) }
  return (
    <div className="items">
      <ul className="list-reset clearfix filmStrip">
        <FilmStripNavItem {...previous.item} onClick={clickPrev} />
        <FilmStripItem {...active.item} />
        <FilmStripNavItem {...next.item} onClick={clickNext} />
      </ul>
      {!active && <p>No Items</p>}
    </div>
  )
}

FilmStrip.propTypes = {
  active: PropTypes.object.isRequired,
  formEvent: PropTypes.object.isRequired,
  next: PropTypes.object.isRequired,
  previous: PropTypes.object.isRequired,
}

export default connectField()(FilmStrip)
