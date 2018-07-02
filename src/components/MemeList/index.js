import React from 'react'
import './index.css'
import MemeItem from '../MemeItem'

function MemeList (props) {
  return (
    <ul className='list'>
      { props.memes.map(meme => <li className='list--item' key={meme.id}><MemeItem {...meme} onClick={props.onClick} /></li>) }
    </ul>
  )
}

export default MemeList
