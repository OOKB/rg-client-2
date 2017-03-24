import { createSelector } from 'reselect'
import { entitySelector, entityTypeSelector, tripleSelector } from 'redux-graph'
import { concat, flatten, get, keyBy, keys, map } from 'lodash'

import { propertyInfo } from './schemaInfo'

export const classEntitySelector = entityTypeSelector('Class')
// Class type keyed by altName.
export const getClassIndex = createSelector(
  classEntitySelector,
  classEntities => keyBy(classEntities, 'alternateName')
)
function selectByKey(collection) {
  return (nil, id) => collection[id]
}
// Expected type(s) for values of the property
function getRangeIncludes(entity, triple, propId) {
  const dataTypes = get(triple.pso, [ 'rangeIncludes', propId ], {})
  return map(dataTypes, selectByKey(entity))
}
// Get all parents.
export function getSubClassOf(triple, classId) {
  return get(triple.spo, [ classId, 'subClassOf' ], {})
}
// Get fields of classId.
export function getClassFields(triple, classId) {
  return keys(get(triple.pos, [ 'domainIncludes', classId ], {}))
}
// For each parent get fields.
export function getParentFields(triple, classId) {
  const subClassOf = getSubClassOf(triple, classId)
  return flatten(map(subClassOf, (nil, id) =>
    getClassFields(triple, id)
  ))
}
export function buildSchema(entity, triple, classEntity) {
  if (!classEntity) return null
  const subClassFields = getParentFields(triple, classEntity.id)
  const classFields = getClassFields(triple, classEntity.id)
  const fieldIds = concat(classFields, subClassFields)
  const fields = map(fieldIds, fieldId =>
    propertyInfo(entity[fieldId], getRangeIncludes(entity, triple, fieldId))
  )
  const domainIncludes = keyBy(fields, 'alternateName')
  return {
    ...entity[classEntity.id],
    domainIncludes,
  }
}
export function getClassName(state, props) {
  return props.classId
}
// Load up class entity based on classId property.
export const getClassEntity = createSelector(getClassIndex, getClassName, get)
// Load up the entire schema object.
export const getSchema = createSelector(
  entitySelector, tripleSelector, getClassEntity, buildSchema
)
