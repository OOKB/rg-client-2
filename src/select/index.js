import { selectForm } from 'redux-field'
import { entitySelector } from 'redux-graph'
import { curry, get, isObject, map, partial, property } from 'lodash'

import { getSelect, select } from 'cape-select'
import { pageSizes } from '../helpers/pager'

export const pageSizeOptions = pageSizes()
export const selectDb = property('db')
export const getDb = partial(select, selectDb)
// Where is our custom pricelist information? Look in defaultState.js or the `db` tree of state.
export const pricelistInfo = getDb('pricelist')
export const getSchema = getDb('schema')

export const getDataFeed = select(entitySelector, 'pBlf')
export const getWebApp = select(entitySelector, 'delanyLongWebApp')

export function optionFill(opts, schema) {
  return map(opts, (opt) => {
    if (isObject(opt)) return opt
    return { ...schema[opt], value: opt }
  })
}
// Get the form prefix used for form state path.
export const formPrefix = curry((filterType, state) => pricelistInfo(state).prefix[filterType])
// Get the active filter value from the form state.
export const getFilter = curry((filterType, state) =>
  get(selectForm(state), formPrefix(filterType, state), {}).value
)
export const getFilterState = partial(getSelect, selectForm)

// Page number.
export const getPageIndex = getFilter('pgIndex')
