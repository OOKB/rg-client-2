import { createSelector, createStructuredSelector } from 'reselect'
import { filter, fill, flatten, flow, groupBy, map, negate, sample, sampleSize } from 'lodash'
import { selectUser } from 'cape-redux-auth'
import { select } from 'cape-select'

import { itemsFilled } from './items'

export const filterOutMissingImages = createSelector(
  itemsFilled,
  items => filter(items, item => (item.hasImage && item.category !== 'trim'))
)

export const patternIndex = createSelector(
  filterOutMissingImages,
  items => groupBy(items, 'patternNumber')
)
export function randomPatternItems(patterns) { return map(sampleSize(patterns, 19), sample) }
// Get random selection of pattern items and then duplicate it.
export const duplicateItems = flow(
  randomPatternItems,
  items => flatten(fill(Array(9), items))
)
export const homeItems = createSelector(patternIndex, duplicateItems)

export const homeSelector = createStructuredSelector({
  items: homeItems,
  showDrawer: negate(select(selectUser, 'drawer.newSite')),
})
