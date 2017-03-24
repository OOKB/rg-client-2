import React, { PropTypes } from 'react'
import classnames from 'classnames'
import map from 'lodash/map'
import Link from 'redux-history-component'

import ItemFav from '../Fav/ItemFav'

import { cellStyles } from './styles'

function makeValue(key, alt, value) {
  if (key !== 'img') return value
  return <img src={`${value}?w=40&h=25&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=1`} alt={alt} />
}

function itemLink(item, key, value) {
  if (key !== 'id' && key !== 'color' && key !== 'img') return value
  return <Link href={item.link}>{makeValue(key, item.id, value)}</Link>
}

function cellValue(item, key, printWhenColor) {
  if (item.isPattern) return itemLink(item, key, item[key])
  const colorKey = printWhenColor[key]
  return colorKey ? itemLink(item, key, item[colorKey]) : null
}

function PricelistRowPattern({ columns, item, printWhenColor }) {
  const className = classnames({
    color: !item.isPattern,
    pattern: item.isPattern,
    category: item.category,
  })
  return (
    <tr className={className}>
      <td className="favButton">
        <ItemFav item={item} />
      </td>
      {map(columns, ({ value }) => (
        <td key={value} style={cellStyles[value]} className={value}>
          {cellValue(item, value, printWhenColor)}
        </td>
      ))}

    </tr>
  )
}

PricelistRowPattern.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  printWhenColor: PropTypes.object.isRequired,
}

export default PricelistRowPattern
