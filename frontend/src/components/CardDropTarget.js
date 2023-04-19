/* Developer: Daniel De Guzman */
/* CardDropTarget.js - the drop target for something that is able to be dragged. */
import React from 'react'
import { CardTypes } from './CardTypes'
import {useDrop} from 'react-dnd'

/* useDrop from 'react-dnd' is able to designate a drop target, and alos take in specific types of what is being dragged - D.D. */
/* picture - card artwork; cardType - the type of card this drop target accepts. -D.D. */
function CardDropTarget({picture, cardType}){

  /* Handle drop zone. Specify which card type the drop target accepts, also what happens when a successful drop is performed. - D.D. */
  const [{ isOver }, drop] = useDrop(
      () => ({
        accept: cardType,
        drop: () => console.log("Drop Zone succesful"),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }),
  )
  return(
      
      <div className="drop-target-container" ref={drop}>
          <img className="drop-target-picture" src={picture} alt="drop-target-picture"></img>
      </div>
  )
}

export default CardDropTarget