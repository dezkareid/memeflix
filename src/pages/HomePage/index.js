/* global fetch */
import React from 'react'

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      memeGallery: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/memes')
      .then(response => response.json())
      .then(response => {
        this.setState({
          memeGallery: response
        })
      })
  }

  render () {
    const memes = this.state.memeGallery.map(meme => <li key={meme.id}>{meme.name}</li>)
    return (<ul>{memes}</ul>)
  }
}
