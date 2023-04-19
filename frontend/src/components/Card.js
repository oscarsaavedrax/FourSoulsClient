/* Developer: Daniel De Guzman */
/* Card.js - component to represent a game card. */

import React from 'react'
import {CardTypes} from './CardTypes.js'
import {useDrag} from 'react-dnd'

/* react-dnd is a react drag and drop library, we'll use dnd to handle sending requests to each other. - D.D. */
/* picture - the cart artwork; cardType - loot, monster, treasure; isTapped - true if tapped, false otherwise. - D.D. */
function Card({picture, cardType , isTapped}) {

  /* handles the dragging action, we're able to send a payload with what we drag. - D.D. */
  const [{isDragging}, drag] = useDrag(() => ({
    type: cardType,
    collect: (monitor) => ({
      isDragging: !! monitor.isDragging()
    })
  }))

  return(
    <>
    {/* Render card based on tapped or untapped position */}
      {isTapped ?  (
        <div className="text drag-item-container">
          <img className="drag-item drag-item-tapped" src={picture}></img>
        </div>
      ) : (
        <div ref={drag} className="text drag-item-container">
          <img className="drag-item" src={picture} alt="card-image"></img>
        </div>
      )}
    </>
    
  )
}
export default Card