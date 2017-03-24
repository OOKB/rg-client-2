import { mapValues } from 'lodash'
import { createSelector, createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { allChildrenSelector } from 'redux-graph'
import { getSelect } from 'cape-select'
import { collectionListSelector, PREDICATE } from 'cape-redux-collection'

import Component from '../components/Fav/Favs'
import { routeParam } from '../redux/routing'
import { itemsFilled } from '../select/items'

const getProjectId = routeParam('projectId')
const getList = getSelect(collectionListSelector, getProjectId)
const listChildren = allChildrenSelector(getList)
const listFilled = createSelector(listChildren, itemsFilled,
  (list, items) => ({
    ...list,
    [PREDICATE]: mapValues(list[PREDICATE], listItem =>
      (listItem.item && { ...listItem, item: items[listItem.item.id] }) || listItem
    ),
  })
)

export const mapStateToProps = createStructuredSelector({
  list: listFilled,
})

export default connect(mapStateToProps)(Component)
