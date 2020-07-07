import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRequest } from '../store/action'
import FilterCard from '../components/component-user-card/src'

export const Home = () => {
  const dispatch = useDispatch()
  const userList = useSelector(state => state.users)

  useEffect(() => {
    dispatch(userRequest({}))
  }, [dispatch])

  return (
    <FilterCard userList = {userList} />
  )
}
