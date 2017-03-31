import { createSimpleAction } from 'cape-redux'
// ${user}/${cart}
// ${user}/${order}
export const ADD_ITEM = 'sample/ADD_ITEM'
export const addItem = createSimpleAction(ADD_ITEM)
export const ITEM_QTY = 'sample/ITEM_QTY'
export const itemQty = createSimpleAction(ITEM_QTY)
export const RM_ITEM = 'sample/RM_ITEM'
export const rmItem = createSimpleAction(ADD_ITEM)
export const EDIT_FIELD = 'sample/EDIT_FIELD'
export const editField = createSimpleAction(EDIT_FIELD)

export const defaultState = {
  items: {},
  fields: {},
}
