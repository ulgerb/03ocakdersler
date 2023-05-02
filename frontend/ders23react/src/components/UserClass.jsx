import React, { Component } from 'react'
// 2019 öncesinde class componentler kullanılırdı, hala kullanılabilir.
export default class UserClass extends Component {

    
    
  render() {
        const {username,password} = this.props;
    return (
      <div>
        <div>username: { username }</div>
        <div>password: { password }</div>
      </div>
    )
  }
}

UserClass.defaultProps = {
    username: "class ---",
    password: "******",
}
