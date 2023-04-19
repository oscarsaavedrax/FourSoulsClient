/* Developer: Daniel De Guzman - D.D. */
/* YourHandSection.js - render the player's hand at the bottom of the game board - D.D. */
import React from 'react'
import '../css/stylesheet.css'
import {ImageService} from '../services/imagesService.js';
/* cards = array of cards in the player's hand - D.D. */
const YourHandSection = ({cards}) => {

    /* Render the entire Your Hand Section - D.D. */
    const renderYourHandSection = () => {
        return(
            <>
            <div class="yourHand-main-container">
                <p class="yourHandSection-label">Your Hand</p>
                {renderYourHandCards()}
            </div>
            </>
        )
    }

    /* Render the Your Hand Cards - D.D. */
    const renderYourHandCards = () => {
        return(
        <>
            {cards.length > 0 ? 
            (
                <>
                    <div class="yourHand-flexbox-container">
                    {/* use ImageService dictionary to get image based on card name */}
                    {cards.map((card) => <img src={ImageService[card.card.name]} className="yourHandSection-card" alt="YourHandCard"></img>)}
                    </div>
                </>
            ) : (<></>)}
        </>
        )
    }

    return(
        <>
        {renderYourHandSection()}
        </>
    )
}
export default YourHandSection;