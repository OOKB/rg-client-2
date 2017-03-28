import { createSelector, createStructuredSelector } from 'reselect'
import { map, propertyOf } from 'lodash'

import { getDb } from './'
import { patternIndex } from './home'

export const samplePatterns = getDb('sampleOrder')

export const items = createSelector(samplePatterns, patternIndex, (ids, patterns) =>
  (patternIndex && map(ids, propertyOf(patterns))) || null
)

const sampleSelector = createStructuredSelector({
  items,
  patternIndex,
})
export default sampleSelector
