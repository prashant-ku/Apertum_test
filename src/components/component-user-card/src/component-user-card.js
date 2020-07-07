import React, { useState } from 'react'
import { Card } from './card.js'
import { Filter } from './filter.js'
import PropTypes from 'prop-types'

const FilterCard = (props) => {
  const [filterParameter, setfilterParameter] = useState({
    namelength: 0,
    maxage: 0,
    minage: 0
  })
  const { userList } = props
  const newUserList = userList ? userList.filter(function (item) {
    if (filterParameter && filterParameter.namelength === 0 && filterParameter.maxage === 0 && filterParameter.minage === 0) {
      return item
    }
    return item.age >= filterParameter.minage && item.age < filterParameter.maxage && (item.firstName + item.lastName).length >= filterParameter.namelength
  }) : []

  const updatefilterParameter = (value) => {
    setfilterParameter(filterParameter => ({ ...filterParameter, ...value }))
  }

  return (
    <div className='container-fluid'>
      <center>
        <h1>Users Records</h1>
      </center>
      <Filter filter={updatefilterParameter}/>
      {newUserList &&
        newUserList.map((user, i) =>
          (<Card key={i}
            user = {user}
          />
          ))}
    </div>
  )
}

FilterCard.propTypes = {
  userList: PropTypes.array
}

export default FilterCard
