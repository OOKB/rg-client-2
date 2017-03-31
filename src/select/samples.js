import { createSelector } from 'reselect'
import { flow, keys, map, propertyOf } from 'lodash'
import { structuredSelector } from 'cape-select'

import { getDb } from './'
import { patternIndex } from './home'

export const samplePatterns = flow(getDb('sampleOrder'), keys)

// Confirmation of a transaction, contains multiple line items,
// each represented by an Offer that has been accepted by the customer.
export const ORDER = 'Order' // Might just use a list instead?
export const items = createSelector(samplePatterns, patternIndex, (ids, patterns) =>
  (patterns && ids && patterns[ids[0]] && map(ids, propertyOf(patterns))) || null
)

export const name = {
  id: 'name',
  // description: 'Full Name',
  position: 0,
  isRequired: true,
  name: 'Full Name',
  type: 'text',
  validators: ['isRequired'],
}
export const company = {
  id: 'company',
  // description: 'Company',
  position: 1,
  isRequired: true,
  name: 'Company',
  type: 'text',
  validators: ['isRequired'],
}
export const fields = {
  name,
  company,
}

const sampleSelector = structuredSelector({
  items,
  patternIndex,
  samplePatterns,
  fields,
  entityType: ORDER,
})
export default sampleSelector
