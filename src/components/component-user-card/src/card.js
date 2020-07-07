import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const UserCard = styled.div`
  height:auto;
  width: 20%;
  display: inline-flex;
  flex-direction: column;
  background-color: #f1f1f1;
  margin: 10px;
  padding: 10px;
  font-size: 30px;
  border: 2px solid #919191;
  box-shadow: 5px 5px #888888;
`
const Header = styled.h3`
  font-weight: normal;
  margin: 0 0 0.75em;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`
const LableName = styled.label`
  ffont-weight: normal;
`
const LableValue = styled.label`
  ffont-weight: bold;
`
export const Card = (props) => {
  const { user } = props
  return (
    <UserCard>
      <Header>{user.accountId}</Header>
      <Row>
        <LableName>First Name: </LableName>
        <LableValue>{user.firstName}</LableValue>
      </Row>
      <Row>
        <LableName>Last Name: </LableName>
        <LableValue>{user.lastName}</LableValue>
      </Row>
      <Row>
        <LableName>Age: </LableName>
        <LableValue>{user.age}</LableValue>
      </Row>
    </UserCard>
  )
}

Card.propTypes = {
  user: PropTypes.object
}
