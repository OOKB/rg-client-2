import React, { PropTypes } from 'react'
import { find, map, size } from 'lodash'
import { PREDICATE } from 'cape-redux-collection'

import Page from '../Page'
import Icon from '../Icon'
import Item from '../Item'

function FavsList({ listItems, imgSize }) {
  return (
    <div>
      <ul className="item-grid list-reset clearfix bb1 pb1">
        {map(listItems, listItem => (
          <Item
            key={listItem.id}
            className="relative"
            item={listItem.item}
            imgSize={imgSize}
            description={listItem.description}
          />
        ))}
      </ul>
    </div>
  )
}
FavsList.propTypes = {
  listItems: PropTypes.object.isRequired,
  imgSize: PropTypes.string.isRequired,
}
FavsList.defaultProps = {
  imgSize: '?w=250&h=187&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=2',
}

function listHasItems(list) {
  return (size(list[PREDICATE]) > 0) && !!find(list[PREDICATE]).item
}

function Favs({ emptyText, list }) {
  const hasFavorites = listHasItems(list)
  return (
    <Page id="favorites">
      <main className="clear m1 mt4 clearfix">
        {hasFavorites &&
          <h1 className="m0 bb1 mb1 fw400 uppercase fs1 ls0p15 text-center">{list.title}</h1>
        }
        {hasFavorites && <FavsList listItems={list[PREDICATE]} />}
        {!hasFavorites &&
          <p className="text-center small bt1 pt2 pb2 bb1">{emptyText}</p>
        }
      </main>
    </Page>
  )
}
Favs.propTypes = {
  emptyText: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
}
Favs.defaultProps = {
  emptyText: 'There are no items in this project.',
}
export default Favs
