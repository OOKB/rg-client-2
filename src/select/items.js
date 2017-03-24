import {
  compact, cond, constant, curry, every, flatten, flow, filter, includes, isEmpty,
  map, method, mapValues, startsWith, stubTrue, uniq,
} from 'lodash'
import { concat, orderBy, pickBy, pluck } from 'lodash/fp'
import { createSelector } from 'reselect'
import { entityTypeSelector } from 'redux-graph'

import { getFilter } from './'
import { activeCategorySelector, categoryCodeIndex } from './category'
import { discFilter } from './disc'

export const activeColor = getFilter('color')
// const CDN = 'https://3f363c8bf5767a720417-fdf7aa33c10c7fb6e1c8c4e342fa358c.ssl.cf5.rackcdn.com'
const CDN = 'https://delanyandlong.imgix.net'
export function getImgUrl(id) {
  return `${CDN}/${id.replace('|', '-')}.jpg`
}
export function itemFill(item, catCodeIndex) {
  if (!item || !item.id) return item
  const { id, category, colors, contents, name, patternNumber, price } = item
  const colorNumber = id.replace(`${patternNumber}-`, '')
  const color = colors && colors.join('/')
  return {
    ...item,
    categoryCode: catCodeIndex[category],
    color,
    colorNumber,
    link: `/detail/${id}`,
    img: getImgUrl(id),
    price: `$${price}${category === 'leather' ? ' sq ft' : ''}`,
    searchable: (color + contents + name + id).toLowerCase(),
  }
}
// All items with type of.
export const orderTrackItems = entityTypeSelector('OrderTrackItem')
// Define what a "valid" base item is.
export function isValidItem(entity) {
  return startsWith(entity.id, 'DL') && entity.category
}
// Accepts object and returns new object of only valid items.
export const filterValid = pickBy(isValidItem)
// Filter out the invalids like "WIRE".
export const itemsValid = createSelector(orderTrackItems, filterValid)

// Items after discontinued filter (`remove`, `only`, `keep`) applied.
export const itemsRaw = discFilter(itemsValid)
// All order-track items filled with computed values.
export const itemsFilled = createSelector(
  itemsRaw,
  categoryCodeIndex,
  (items, catCodeIndex) => mapValues(items, item => itemFill(item, catCodeIndex))
)
export const orderItems = orderBy('id', 'asc')

export const filterSort = curry((filterBy, items) => orderItems(filter(items, filterBy)))

export const itemsSorted = createSelector(itemsFilled, orderItems)
export const categorySelector = createSelector(
  itemsFilled,
  activeCategorySelector,
  (items, category) => (category && filterSort({ category }, items)) || orderItems(items)
)
export function colorSearch(searchValue) {
  return item => item.colors && includes(item.colors, searchValue)
}
export const colorFilterSelector = createSelector(
  categorySelector,
  activeColor,
  (items, color) => (color && filter(items, colorSearch(color))) || items
)
export function textSearch(searchValue) {
  return item =>
    every(compact(searchValue.split(' ')), searchTxt =>
      item.searchable.includes(searchTxt)
    )
}
export const getFilterText = createSelector(getFilter('text'), method('toLowerCase'))
export function searchItems(items, searchValue) {
  return (searchValue && filter(items, textSearch(searchValue))) || items
}
export const textSearchSelector = createSelector(colorFilterSelector, getFilterText, searchItems)
export const patternColorSelector = createSelector(
  textSearchSelector,
  (items) => {
    let currentPattern = null
    return map(items, (item) => {
      const isPattern = currentPattern !== item.patternNumber
      currentPattern = item.patternNumber
      return {
        ...item,
        isPattern,
      }
    })
  }
)
export const noColor = [{ label: '- All Colors -', value: '' }]
export const buildColors = cond([
  [isEmpty, constant(null)],
  [stubTrue, flow(pluck('colors'), flatten, uniq, method('sort'), concat(noColor))],
])
export const colorSelector = createSelector(itemsFilled, buildColors)
