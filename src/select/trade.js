import {
  cond, constant, eq, flow, isUndefined, map, method,
  over, overEvery, partialRight, property, spread, toUpper,
} from 'lodash'
import { oneOf } from 'cape-lodash'
import { isEqual } from 'lodash/fp'
import { getState } from 'redux-field'
import { createSelector, createStructuredSelector } from 'reselect'
import { fieldValidation } from 'cape-validate'
import { getSelect, select } from 'cape-select'

import { getDb } from './'
import { users } from './user'

// Login fields.
const custNum = {
  className: 'accountNumber',
  icon: { className: 'light-gray', symbol: 'hashtag' },
  placeholder: 'D&L Account Number',
  prefix: [ 'login', 'customerNumber' ],
  validate: fieldValidation([ 'numString', [ 'firstChar', '0' ], [ 'length', 6 ] ]),
}
// Zip code validation.
export const validNumZip = fieldValidation([ 'numString', [ 'length', 5 ] ])

const validZipCountries = map([
  'AUSTRALIA', 'BRAIL', 'Canada', 'CHINA', 'FRANCE', 'MEXICO', 'NETHERLAND',
], toUpper)
export const isValidCountry = flow(toUpper, method('slice', 0, 10), oneOf(validZipCountries))

export function zipCountryError(isValid) {
  if (isValid) return undefined
  return 'Invalid Country.'
}
export const validZipCountry = flow(isValidCountry, zipCountryError)
export function isLetterString(val) {
  return /^[a-zA-Z]+$/.test(val)
}
export function validateZip(value) {
  const err1 = validNumZip(value)
  if (isUndefined(err1)) return undefined
  const err2 = validZipCountry(value)
  if (isUndefined(err2)) return undefined
  if (isLetterString(value)) return err2
  return err1
}
// Zip code information.
export const zip = {
  className: 'zipCode',
  icon: { className: 'light-gray', symbol: 'hashtag' },
  placeholder: 'Postal Code',
  prefix: ['login', 'postalCode'],
  validate: validateZip,
}

export function mergeTwo(obj1, obj2) {
  return { ...obj1, ...obj2 }
}
export const getTrade = getDb('trade')
export const getSchema = constant({ custNum, zip })
export const constState = createSelector(getTrade, getSchema, mergeTwo)

export function formState(props) {
  return state => getState(state, props)
}
export const acctNumState = formState(custNum)
export const fieldValid = partialRight(flow, overEvery(property('isValid'), property('value')))
export const acctNumValid = fieldValid(acctNumState)
export const acctNumId = flow(acctNumState, property('validValue'))
export const acctNumChecking = flow(over(acctNumValid, acctNumId), isEqual([ true, null ]))
export const showZip = overEvery(acctNumValid, acctNumId)

export const zipState = formState(zip)
export const zipValue = flow(select(zipState, 'value'), toUpper)
export const getCustomerZip = flow(
  getSelect(users, acctNumId),
  property('postalCode')
)
export const zipMatch = flow(
  over(getCustomerZip, zipValue),
  spread(eq)
)
export const zipInvalid = flow(over(fieldValid(zipState), zipMatch), isEqual([ true, false ]))
export const showLoginButton = overEvery(showZip, fieldValid(zipState), zipMatch)
export const uid = cond([ [ showLoginButton, acctNumId ] ])
export const validInfo = createStructuredSelector({
  acctNumChecking,
  showZip,
  uid,
  zipInvalid,
  zipValue,
})
export const mapStateToProps = createSelector(constState, validInfo, mergeTwo)
