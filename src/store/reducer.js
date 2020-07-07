import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
  loginRespose,
  userResponse
} from './action'

export const defaultState = {
  auth: null,
  users: null
}

const auth = handleActions({
  [loginRespose]: (state, action) => (
    action.error ? state : action.payload
  )
}, defaultState.auth)

const users = handleActions({
  [userResponse]: (state, action) => (
    action.error ? state : action.payload
  )
}, defaultState.users)

export default combineReducers({
  auth,
  users
})
