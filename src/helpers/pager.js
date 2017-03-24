import defaults from 'lodash/defaults'
import isEmpty from 'lodash/isEmpty'

export const defaultPageSize = 48

export function pageSizes(multiple = defaultPageSize) {
  return [
    multiple,
    multiple * 2,
    multiple * 3,
    multiple * 10,
    { value: '10000', label: 'All' },
  ]
}
const defaultOpts = {
  resultKey: 'items',
  page: 1,
  perPage: defaultPageSize,
}
export function getOpts(opts) {
  return defaults({
    ...opts,
    page: (opts.page && parseInt(opts.page, 10)) || defaultOpts.page,
  }, defaultOpts)
}
export function emptyRes(items, perPage, resultKey) {
  return {
    hasLess: false,
    hasMore: false,
    [resultKey]: items,
    maxPage: 0,
    pageIndex: 1,
    perPage,
    totalItems: 0,
  }
}
export function getPageIndex(page, maxPage) {
  if (page < maxPage) return page || 1
  return maxPage
}
export function getPagerInfo(items, opts) {
  const { page, resultKey, perPage } = getOpts(opts)
  const totalItems = items.length
  if (isEmpty(items)) return emptyRes(items, perPage, resultKey)
  const maxPage = Math.ceil(totalItems / perPage)
  const pageIndex = getPageIndex(page, maxPage)
  const itemsStart = (pageIndex - 1) * perPage
  const itemsEnd = itemsStart + perPage
  const result = items.slice(itemsStart, itemsEnd)
  return {
    hasLess: pageIndex > 1,
    hasMore: pageIndex < maxPage,
    [resultKey]: result,
    maxPage,
    pageIndex,
    perPage,
    totalItems,
  }
}
