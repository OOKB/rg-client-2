import { createSelector, createStructuredSelector } from 'reselect'
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import set from 'lodash/set'
import { select } from 'cape-select'
import { firstValArg } from 'cape-lodash'

import { getDb, getFilter, getSchema, optionFill, pricelistInfo } from './'
// Array of category options from database.
export const getCategoryOptions = getDb('categoryOptions')

export const defaultCategory = select(pricelistInfo, 'defaultCategory')
export const getFilterCategory = getFilter('category')

export const categoryOptionsSelector = createSelector(
  getCategoryOptions,
  getSchema,
  (catOptions, schema) => optionFill(catOptions, schema)
)

function addCodeIndex(result, { code, value }) {
  return set(result, value, code)
}
export const categoryCodeIndex = createSelector(
  categoryOptionsSelector,
  opts => reduce(opts, addCodeIndex, {})
)
// Used in the footer area to describe key codes.
export const getCategoryKey = createSelector(
  categoryOptionsSelector,
  opts => map(opts, ({ code, label }) => `${code} ${label}`)
)
// The selected or default category.
export const activeCategorySelector = createSelector(
  getFilterCategory,
  defaultCategory,
  firstValArg
)
export const category = createStructuredSelector({
  active: activeCategorySelector,
  options: categoryOptionsSelector,
})
