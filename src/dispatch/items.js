import { closeDetail } from './back'

export function missingImage({ id, type }) {
  console.log('missing img', id, type)
  return { type: 'UPDATE_ENTITY', payload: { type: 'OrderTrackItem', id, missingImg: true } }
}

export function detailClose() {
  return (dispatch, getState) => {
    const state = getState()
    const action = closeDetail(state)
    dispatch(action)
  }
}
