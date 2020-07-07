import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from './Login'
import { LoginRoute } from './loginRoute.js'
import { Home } from './Home'

export function Routes() {
  // const history = useHistory()

  return (

    <Switch>
      <LoginRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="*">
        <div>Not found</div>
      </Route>
    </Switch>

  )
}
