import React from 'react'

function MemeItem (props) {
  return (
    <article>
      <img src={props.image} />
      <h3>{props.name}</h3>
      <span>{props.description}</span>
    </article>
  )
}

export default MemeItem
