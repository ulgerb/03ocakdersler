import React from 'react'
import PropTypes from 'prop-types'

function User(props) {
    
  return (
    <>
    <div>Username: {props.username}</div>
    <div>Password: {props.password}</div>
    </>
  )
}

User.defaultProps = {
    username : "Yoktur",
    password : "Girilmedi",
}

User.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default User;