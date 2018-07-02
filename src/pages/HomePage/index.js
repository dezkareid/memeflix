/* global fetch */
import React from 'react'
import MemeList from '../../components/MemeList'

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      memes: []
    }
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick (event) {
    console.log(event)
  }

  componentDidMount () {
    fetch('http://localhost:3000/memes')
      .then(response => response.json())
      .then(response => {
        this.setState({
          memes: response
        })
      })
      .catch(error => {
        console.error(error)
      })
  }
  render () {
    return (<MemeList memes={this.state.memes} onClick={this._handleClick} />)
  }
}
