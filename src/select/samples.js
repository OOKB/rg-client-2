import { createSelector, createStructuredSelector } from 'reselect'
import { flow, keys, map, propertyOf } from 'lodash'

import { getDb } from './'
import { patternIndex } from './home'

export const samplePatterns = flow(getDb('sampleOrder'), keys)

export const items = createSelector(samplePatterns, patternIndex, (ids, patterns) =>
  (patterns && ids && patterns[ids[0]] && map(ids, propertyOf(patterns))) || null
)

const sampleSelector = createStructuredSelector({
  items,
  patternIndex,
  samplePatterns,
})
export default sampleSelector
