/* Developer: Daniel De Guzman */
/* TreasureCardsSection.js - renders the treasure card shop on the game board. */
import React from 'react'
import '../css/stylesheet.css'
import treasureCardBack from '../assets/images/card-pictures/card-drop-targets/treasure-card-back.png'
import {ImageService} from '../services/imagesService.js';
/* cards = array of treasure cards - D.D. */
const TreasureCardsSection = ({activeTreasures, cards}) => {

    /* Render the entire treasure cards section - D.D. */
    const renderTreasureCardsSection = () => {
        return(
            <>
            {/* Main Container for the Treasure Cards Section - D.D. */}
            {activeTreasures ? (
                <>
                <div class="treasureCards-main-container">
                <div class="treasureCards-treasureCardBack-container">
                    <img class="treasureCards-treasureCardBack" src={treasureCardBack} alt="TreasureCardBack"></img>
                </div>
                <div class="treasureCards-activeCards-container">
                    {/* Call the method to render the treasure cards - D.D. */}
                    {renderTreasureCards()}
                </div>
                </div>
                </>
            ) : (<></>)}
            
            </>
        )
    }

    const renderTreasureCards = () => {
        return(
            <>
            {activeTreasures.cards ? (
            <>
                {activeTreasures.cards.map((item) => {
                    return(<img class="treasureCards-activeItem" src={ImageService[item.card.name]} alt="Treasure Card"></img>)
                })}
            </>
            ) : 
            (<></>)}
            </>
        )
    }
    // /* Render the treasure cards - D.D. */
    // const renderTreasureCards = () => {
    //     activeTreasures.cards.map( (item) => {
    //     return(
    //         <img class="treasureCards-activeItem" src={ImageService[item.card.name]} alt="Treasure Card"></img>
    //     )
    // })

    return(
        <>
        {activeTreasures ? (
            <>
            {renderTreasureCardsSection()}
            </>
        ) : (<><h1>No Treasures</h1></>)
        }     
        </>
    )
}
export default TreasureCardsSection;

