import React, { useState, useCallback, useContext } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import AuthContext from '../AuthContext'

const LoginForm = styled.form`
  padding: 20px;
`
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`
const Error = styled.label`
  color: Red;
`

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
`

export const Login = () => {
  const { login } = useContext(AuthContext)
  const error = useSelector(state => state.errors)

  const [userName, setUserName] = useState('')
  const [userPassword, setPassword] = useState('')

  const onLoginSubmit = useCallback((e) => {
    e.preventDefault()
    login(userName, userPassword)
  }, [login, userName, userPassword])

  return (
    <LoginForm onSubmit={onLoginSubmit}>
      {error && <Error>{error}</Error>}
      <Input type="text" placeholder="Enter Username" name="uname" required value={userName} onChange={e => setUserName(e.target.value)}/>
      <Input type="password" placeholder="Enter Password" name="psw" required value={userPassword} onChange={e => setPassword(e.target.value)}/>
      <Button type="submit">Login</Button>
    </LoginForm>
  )
}
