import {
  defaultTo, flow, get, head, identity, isFunction, last, over,
  partial, partialRight, property, spread, stubTrue, toLower,
} from 'lodash'
import { eq, filter, find, map, omit, split } from 'lodash/fp'
import { setField, setWith } from 'cape-lodash'
import accepts from 'attr-accept'

const mapWithKey = map.convert({ cap: false })

export function prevDef(event) {
  if (event && isFunction(event.preventDefault)) event.preventDefault()
  return event
}

export function hovering(event) {
  if (event.stopPropagation) event.stopPropagation()
  try {
    event.dataTransfer.dropEffect = 'copy' // eslint-disable-line no-param-reassign
  } catch (err) {
    // continue regardless of error
  }
  return event
}
// Use this for `onDragOver`.
export const handleHover = flow(prevDef, hovering)
// Call this with your action to call after default handling.
export const handleDragOver = partial(flow, handleHover)

export function getFiles(event) {
  const targetFiles = get(event, 'target.files', [])
  const files = get(event, 'dataTransfer.files', targetFiles)
  return Array.prototype.slice.call(files)
}
export const handleDrop = flow(prevDef, getFiles)

export const extConvert = {
  jpg: 'jpeg',
  yml: 'yaml',
}
export function convertExt(ext) { return extConvert[ext] || ext }
export const getExt = flow(split('.'), last, toLower, convertExt)
export const setExt = setWith('ext', 'name', getExt)

export function fileMeta(file, index = 0) {
  if (!file.type && !file.name) {
    console.error(file)
    throw new Error('File must contain type or name attribute.')
  }
  return {
    contentSize: file.size,
    // dateModified: file.
    file,
    fileFormat: file.type,
    index,
    lastModified: file.lastModified,
    name: file.name,
    type: 'File',
  }
}
export const onlyFirst = flow(property('index'), eq(0))
export const acceptChecker = accept => flow(
  property('file'),
  partialRight(accepts, accept)
)
// getAcceptChecker(props)(file) returns boolean.
  // multiple ? stubTrue : onlyFirst,

export const getFile = props => flow(
  fileMeta,
  setExt,
  setField('isAccepted', props.accept ? acceptChecker(props.accept) : stubTrue)
)
export const acceptedPred = { isAccepted: true }
// Return array limited to isAccepted.
export const onlyAccepted = filter(acceptedPred)
// Return first isAccepted.
export const firstAccepted = find(acceptedPred)
export const getFirst = flow(over(firstAccepted, head), spread(defaultTo))

// Remove file field from object.
export const omitFile = omit('file')
// Only accepted files and without file property.
export const withoutFile = flow(onlyAccepted, map(omitFile))
export const handleBlur = ({ multiple, onBlur }) => (files) => {
  onBlur(multiple ? withoutFile(files) : omitFile(files))
  return files
}
// export const debugReturn = (item) => { console.log(item); return item }

function selectBlur(props) {
  // We should do some validation here instead of the blur?
  if (isFunction(props.onSelect)) {
    // I think the thing is to just send the action creator props?
    // Only issue is that this is happening on every render?
    return props.onSelect(props)
  }
  return (isFunction(props.onBlur) && handleBlur(props)) || identity
}
// Trying to provide helpful but limited defaults.
export const handleSelect = props => flow(
  handleDrop,
  mapWithKey(getFile(props)),
  props.multiple ? identity : getFirst,
  selectBlur(props)
)

export function humanFileSize(bytes) {
  const units = ['B', 'KB', 'MB', 'GB']
  const index = Math.floor(Math.log(bytes) / Math.log(1024))
  const size = (bytes / (1024 ** index)).toFixed(2) * 1
  return {
    value: size,
    unitText: units[index],
  }
}
