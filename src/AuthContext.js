import React, { useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest } from './store/action'
import PropTypes from 'prop-types'

const AuthContext = React.createContext({})
const selectUser = state => state.auth

export function AuthContextProvider({ children, ...props }) {
  const auth = useSelector(selectUser)
  const dispatch = useDispatch()

  const login = useCallback((userName, userPassword) => {
    dispatch(loginRequest({ user: userName, password: userPassword }))
  }, [dispatch])

  const value = useMemo(() => ({
    isLoggedIn: !!auth,
    auth,
    login
  }), [auth, login])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.object
}

export default AuthContext
