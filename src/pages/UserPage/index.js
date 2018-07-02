import React from 'react'
import AuthenticationContext from '../../context/AuthContext'
export default class UserPage extends React.Component {
  render () {
    return (
      <div>
        <AuthenticationContext.Consumer>
          { ({auth}) => <h1>userpage { auth ? 'auth' : 'no auth' }</h1>}
        </AuthenticationContext.Consumer>
      </div>
    )
  }
}
