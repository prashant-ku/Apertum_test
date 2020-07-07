import { call, put, takeLatest, select } from 'redux-saga/effects'
import { apiCall } from './service'
import {
  loginRequest,
  loginRespose,
  userRequest,
  userResponse
} from './action'

const baseUrl = 'https://apertum-interview.herokuapp.com/api/'
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export function * loginCall(action) {
  try {
    const url = baseUrl + 'user/login'
    const headers = { ...defaultHeaders }
    const body = JSON.stringify({ accountId: action.payload.user, pswd: action.payload.password })
    const response = yield call(apiCall.loginCall, url, headers, body)
    yield put(loginRespose(response))
    yield put(window.location.assign('/'))
  } catch (error) {
    yield put(loginRespose(error))
  }
}

export function * userCall(action) {
  try {
    const token = yield select(state => state.auth.token)
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7fSwiZXhwIjoxNTk0MDI2NzI4LCJpYXQiOjE1OTQwMjU4Mjh9.vYH9N1g547dEEIx1dNrI55qJPpkSOIF0dyipzvIRDAQ'

    const url = baseUrl + 'users'
    const headers = {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`
    }
    const response = yield call(apiCall.getRequest, url, headers)
    yield put(userResponse(response))
  } catch (error) {
    yield put(userResponse(error))
  }
}

export default function * saga() {
  yield takeLatest(loginRequest, loginCall)
  yield takeLatest(userRequest, userCall)
}
