import { cond, overEvery, stubTrue } from 'lodash'
import { omitBy, pickBy } from 'lodash/fp'
import { createSelector, createStructuredSelector } from 'reselect'
import { select } from 'cape-select'
import { isAnonymous, isAuthenticated } from 'cape-redux-auth'
import { getDb, getFilterState, formPrefix } from './'

export const prefix = formPrefix('discontinued')
export const discHasFocus = select(getFilterState(prefix), 'focus')
// Should we limit items to only discontinued?
export const discActive = overEvery(isAuthenticated, discHasFocus)
// Should disc items be removed from the list before filters?
export const discHide = isAnonymous
export const discTrue = { discontinued: true }
export const removeDiscItems = omitBy(discTrue)
export const onlyDiscItems = pickBy(discTrue)

// Build discontinued item options. `remove`, `only`, `keep`.
export function discFilter(itemsValid) {
  // These selectors are created on init so they should work correctly.
  const discRm = createSelector(itemsValid, removeDiscItems)
  const discOnly = createSelector(itemsValid, onlyDiscItems)
  return cond([
    [ discHide, discRm ],
    [ discActive, discOnly ],
    [ stubTrue, itemsValid ],
  ])
}
// Used with DiscToggle component.
export const props = createStructuredSelector({
  discActive, // Is the summer button active?
  hide: discHide, // Should the summer button be displayed in the interface?
})

// Used for SummerText.js component.
export const discMsgTxt = createStructuredSelector({
  active: discActive,
  texts: getDb('summerSaleTxt'),
})
