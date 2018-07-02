import React from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'

function withNavigation (Component) {
  class NavigationElement extends React.Component {
    constructor (props) {
      super(props)
      this._navigate = this._navigate.bind(this)
    }
    _navigate () {
      this.props.history.push(this.props.path)
    }

    render () {
      let { staticContext, ...properties } = this.props
      return (<Component {...properties} onClick={this._navigate} />)
    }
  }

  return withRouter(NavigationElement)
}

function LoginRoute ({ component: Component, authed, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => !authed
        ? <Component {...rest} />
        : <Redirect to={{pathname: '/user', state: {from: props.location}}} />}
    />
  )
}

function ProtectedRoute ({ component: Component, authed, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => authed
        ? <Component {...rest} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
export default {
  LoginRoute,
  withNavigation,
  ProtectedRoute
}
