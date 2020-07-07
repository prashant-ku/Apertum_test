import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from './AuthContext'
import PropTypes from 'prop-types'

export function LoginRoute({ component: Component, children, ...props }) {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <Route {...props} render={({ location }) => {
      if (!isLoggedIn) {
        return <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }

      return Component ? <Component /> : children
    }}
    />
  )
}

LoginRoute.propTypes = {
  Component: PropTypes.object,
  children: PropTypes.object
}
