import React, { PropTypes } from 'react'
import map from 'lodash/map'

import { ternVal } from '../utils'
import Icon from '../Icon'
import Color from './RelatedColor'

const style = {
  closed: {
    boxShadow: '0 0 0 0 rgba(65,65,45,0)',
    height: '1.5rem',
    border: '0',
  },
  open: {
    boxShadow: '0 .25em .75em 0 rgba(65,65,45,.75)',
    height: '66px',
    border: '2px solid rgba(242,239,229,1)',
    borderTop: '0',
  },
  plain: {
    transform: 'rotate(0deg)',
    transition: 'all 300ms',
  },
  rotated: {
    transform: 'rotate(-180deg)',
    transition: 'all 300ms',
  },
}

const getStyle = ternVal(style.open, style.closed)
const getRotation = ternVal(style.rotated, style.plain)

function Related({ close, colors, isOpen, open, parent }) {
  const toggle = isOpen ? close : open
  return (
    <div id="related-colors" className="z2 relative" style={getStyle(isOpen)}>
      <button className="colors-header" onClick={toggle}>
        <Icon symbol="caret-down" hidden style={getRotation(isOpen)} /> Additional Colors
      </button>
      <ul className="list-reset">
        {map(colors, color =>
          <Color key={color.colorNumber} parent={parent} color={color} />
        )}
      </ul>
    </div>
  )
}

Related.propTypes = {
  close: PropTypes.func.isRequired,
  colors: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
  parent: PropTypes.object.isRequired,
}

export default Related
