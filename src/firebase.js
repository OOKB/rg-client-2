import { partial } from 'lodash'
import initializeFirebase, { fireMiddleware, reduxFirebase } from 'cape-firebase'
import { reduxFireDispatcher } from 'cape-redux-collection'
import { entities, firebaseConfig } from './config'

// Init the firebase class for this app.
const firebase = initializeFirebase(firebaseConfig)

// Redux functions.

// Middleware
export const reduxFireMiddleware = fireMiddleware(firebase, entities, reduxFireDispatcher)
// Build func to listen for firebase changes and dispatch to redux.
export const reduxFireListener = partial(reduxFirebase(entities), firebase)
export default firebase
