import {
  createHistory, parseUrl, restoreHistory, selectHistoryState, selectActiveKey,
} from 'redux-history-sync'
import { find, orderBy, startsWith } from 'lodash'

export function selectPrevious(state) {
  const historyState = selectHistoryState(state)
  const active = selectActiveKey(historyState)
  if (historyState.length < 2) return null
  return find(historyState.key, { index: active.index - 1 })
}

export function isNonDetail({ location: { pathname } }) {
  return !startsWith(pathname, '/detail/')
}

export function findNonDetail(state) {
  const historyState = selectHistoryState(state)
  if (historyState.length < 2) return null
  const historyItems = orderBy(historyState.key, 'index', 'desc')
  return find(historyItems, isNonDetail)
}
export const collectionLocation = parseUrl('/collection')
export function closeDetail(state) {
  const previous = findNonDetail(state)
  // console.log(previous)
  if (previous) return restoreHistory(previous.id, false)
  return createHistory(collectionLocation)
}
