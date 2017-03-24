import { flow, partial } from 'lodash'
import { clear, fieldValue } from 'redux-field'
import {
  createListThunk, FAV_TITLE, toggle, UPDATE_ITEM,
} from 'cape-redux-collection'
import { selectUser } from 'cape-redux-auth'
import { pickTypeId } from 'redux-graph'
import { getDataFeed, getWebApp } from '../select'

// WHAT IS THIS FILE AND WHY IN /redux?

export function projectLink(list) {
  if (!list) return null
  return `/project/${list.id}`
}

// Creating a new project popup.
export const fieldPrefix = ['collection', 'title']
const getTitle = fieldValue(fieldPrefix)
// Return user if there was a title set. Otherwise return webApp.
export function collectionListAgent(state, props) {
  if (getTitle(state, props) !== FAV_TITLE) return selectUser(state)
  return getWebApp(state)
}
export function listAgentMain(item) {
  return {
    item,
    additionalType: 'ProjectDelanyLong',
    agent: collectionListAgent,
    mainEntity: getDataFeed,
  }
}
export const editItemCollections = flow(listAgentMain, toggle)

export const resetField = partial(clear, fieldPrefix)
export function createCollection(dispatch) {
  return () =>
    dispatch(createListThunk({ additionalType: 'ProjectDelanyLong', title: getTitle }))
    .then(() => dispatch(resetField()))
}
export function saveListItemField({ fieldId, prefix }, listItem) {
  const getVal = fieldValue(prefix)
  function getPayload(state) {
    return {
      ...pickTypeId(listItem),
      [fieldId]: getVal(state),
    }
  }
  return () => (dispatch, getState) =>
    dispatch({ type: UPDATE_ITEM, payload: getPayload(getState()) })
    .then(() => dispatch(clear(prefix)))
}
