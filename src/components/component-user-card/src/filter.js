import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
`

export const Filter = (props) => {
  const onFilter = () => {
    props.filter(
      {
        namelength: 10,
        maxage: 30,
        minage: 20
      }
    )
  }
  return (
    <div>
      <Button onClick={onFilter} value ="Filter">Filter</Button>
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.func
}
