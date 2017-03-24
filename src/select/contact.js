import { constant, defaultTo, flow, over, spread } from 'lodash'
import { createSelector, createStructuredSelector } from 'reselect'
import { entitySelector } from 'redux-graph'
import { getObjIds, select } from 'cape-select'
import { selectUser } from 'cape-redux-auth'

export function getContactText(state) {
  return state.db.distributed
}
export function getServiceText(state) {
  return state.db.service
}

const offices = {
  main: [ 'dlheadquarters' ],
  us: [
    'NYCshowroom',
    'bostonNE',
    'chicago',
    'connecticutEtc',
    'dallas',
    'washingtonDC',
    'florida',
    'houston',
    'midwest',
    'laWestCoast',
    'newjersey',
    'midatlantic',
    'rockies',
    'sanfranWestCoast',
    'southeast',
    'northwest',
  ],
  world: [ 'southAmerica', 'europe', 'canada' ],
}
export const officeListSelector = constant(offices)
export const officeSelector = createSelector(entitySelector, officeListSelector, getObjIds)
export const mainOffice = select(entitySelector, 'dlheadquarters')
export const contactSelector = createStructuredSelector({
  contactText: getContactText,
  offices: officeSelector,
  serviceText: getServiceText,
})
export const userSalesConact = select(selectUser, 'sales')
export const userSalesOffice = flow(
  over(userSalesConact, mainOffice),
  spread(defaultTo)
)
