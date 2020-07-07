import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { Routes } from './route.js'
import { AuthContextProvider } from './AuthContext'
import styled from 'styled-components'
import store from './store'
import PropTypes from 'prop-types'

export function App({ className }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <div className={className}>
          <main><Routes /></main>
        </div>
      </AuthContextProvider>
    </Provider>
  )
}

App.propTypes = {
  className: PropTypes.string
}

export default styled(App)`
  display: flex;
  flex: 1;
  flex-direction: column;

  > main {
    padding: 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`
