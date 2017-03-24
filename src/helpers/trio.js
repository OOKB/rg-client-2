export function getMaxIndex(items) {
  return items.length - 1
}
export function getNextIndex(items, index) {
  if (getMaxIndex(items) <= index) return 0
  if (index <= 0) return 1
  return index + 1
}
export function getPrevIndex(items, index) {
  const lastIndex = getMaxIndex(items)
  if (index <= 0) return lastIndex
  if (lastIndex < index) return lastIndex - 1
  return index - 1
}
export function createItemIndex(item, index) {
  return { item, index }
}
export function getIndex(pageIndex, maxPage) {
  if (!pageIndex) return 0
  const index = parseInt(pageIndex, 10)
  if (index < 0) return 0
  if (index < maxPage) return index
  return 0
}
export default function trio(items, pageIndex) {
  const maxPage = items.length
  const index = getIndex(pageIndex, maxPage)
  const nextIndex = getNextIndex(items, index)
  const prevIndex = getPrevIndex(items, index)
  return {
    active: createItemIndex(items[index], index),
    next: createItemIndex(items[nextIndex], nextIndex),
    pageIndex: index + 1,
    previous: createItemIndex(items[prevIndex], prevIndex),
    maxPage,
  }
}
