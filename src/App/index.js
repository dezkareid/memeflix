import React from 'react'
import Page from '../components/Page'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'
import LoginPage from '../pages/LoginPage'
import { AppBar, Toolbar, Button, Drawer } from '@material-ui/core'
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from '../components/Navigation'
import FirebaseAdapter from '../modules/FirebaseAdapter'
import AuthenticationContext from '../context/AuthContext'

const auth = FirebaseAdapter.getAuth()

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      drawerOpen: false,
      authed: true
    }
    this._handleMenuIcon = this._handleMenuIcon.bind(this)
  }

  componentDidMount () {
    this.unSuscribe = auth().onAuthStateChanged((authed) => {
      if (authed) {
        this.setState({ authed })
      } else {
        this.setState({ authed: false })
      }
    })
  }

  componentWillUnmount () {
    this.unSuscribe()
  }

  _handleMenuIcon (event) {
    event.stopPropagation()
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  render () {
    let ButtonNavUser = Navigation.withNavigation(Button)
    let ButtonNavHome = Navigation.withNavigation(Button)

    const UserPageProtected = Navigation.ProtectedRoute
    const LoginRoute = Navigation.LoginRoute
    return (
      <Page>
        <AuthenticationContext.Provider value={{ auth: this.state.authed }}>
          <BrowserRouter>
            <React.Fragment>
              <AppBar position='static' color='default'>
                <Toolbar>
                  <ButtonNavHome path='/'>Memeflix</ButtonNavHome>
                  <ButtonNavUser path='/user'>User</ButtonNavUser>
                  <Button onClick={this._handleMenuIcon}>Abrir menu</Button>
                </Toolbar>
              </AppBar>
              <Drawer open={this.state.drawerOpen} onClick={this._handleMenuIcon}>
                i am a drawer
              </Drawer>
              <Route exact path='/' component={HomePage} />
              <LoginRoute path='/login' component={LoginPage} authed={this.state.authed} />
              <UserPageProtected path='/user' component={UserPage} authed={this.state.authed} />
            </React.Fragment>
          </BrowserRouter>
        </AuthenticationContext.Provider>
      </Page>
    )
  }
}

export default App
