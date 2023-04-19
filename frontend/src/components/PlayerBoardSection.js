/* Developer: Daniel De Guzman */
/* PlayerBoardSection.js - section that shows users cards and stats. */

import React from 'react';
import '../css/stylesheet.css';
import healthIcon from '../assets/icons/heartIcon.png'
import cardsInHandIcon from '../assets/icons/cardsInHandIcon.jpg'
import coinIcon from '../assets/icons/coinIcon.jpg'
import soulIcon from '../assets/icons/soulIcon.png'
import {ImageService} from '../services/imagesService.js';
/* cards = character card, current tresure cards... will implement them to Card component later. - D.D. */
/* health/cardsInHand/coins/souls = number the player has - D.D. */
/* isBottom is a bool that tells position on the screen - D.D. */

const PlayerBoardSection = ({player, cards, health, cardsInHand, coins, souls, isBottom}) => {

    /* Method to render the player's cards - D.D. */
    const renderCardSection = () =>{
        return(
            <div class="playerBoardSection-cards-container">
                {player ? (
                    <>
                        <div class="playerBoardSection-characterCard-container">
                            <img class="playerBoardSection-characterCard" src={ImageService[player.character.entity.card.name]} alt="Character Card"></img>
                        </div>
                        <div class="playerBoardSection-treasureCards-container">
                            {player.items.cards.length > 0 ? (
                                <>
                                {player.items.cards.map((item) => {
                                    return(<img class="playerBoardSection-treasureCard" src={ImageService[item.card.name]} alt="Treasure Card"></img>)
                                })}
                                </>
                            ): (<h1>No Treasure Items</h1>)}
                        </div>
                    </>
                ) : (
                    <h1>"No Character Yet"</h1>
                )
            }
            </div>
        )
    }

    /* Method to render the player stats (health/cardsInHand/coins/souls) - D.D. */
    const renderPlayerStats = () => {
        return (
            <div class="playerBoardSection-playerStats-container">
                {player ? (
                    <>
                        {/* Health Info Section - D.D. */}
                    <div class="playerStats-stats-container">
                        <div class="playerStats-icon-container">
                            <img class="playerStats-icon" src={healthIcon} alt="healthIcon"></img>
                        </div>
                        <div class="text">
                            x {player.character.entity.hp}
                        </div>
                    </div>
                    {/* CardsInHand Info Section - D.D. */}
                    <div class="playerStats-stats-container">
                        <div class="playerStats-icon-container">
                            <img class="playerStats-icon" src={cardsInHandIcon} alt="cardsInHandIcon"></img>
                        </div>
                        <div class="text">
                            x {player.hand.cards.length}
                        </div>
                    </div>
                    {/* Coins Info Section - D.D. */}
                    <div class="playerStats-stats-container">
                        <div class="playerStats-icon-container">
                            <img class="playerStats-icon" src={coinIcon} alt="coinIcon"></img>
                        </div>
                        <div class="text">
                            x {player.coins}
                        </div>
                    </div>
                    {/* Souls Info Section - D.D. */}
                    <div class="playerStats-stats-container">
                        <div class="playerStats-icon-container">
                            <img class="playerStats-icon" src={soulIcon} alt="soulIcon"></img>
                        </div>
                        <div class="text">
                            x {player.souls}
                        </div>
                    </div>
                    </>
                ) : (<h1>No Stats</h1>)}
                
            </div>
        )
    }

    return(
        /* if the player is on the bottom, put the player stats on top. - D.D. */
        <>
            <div class="playerBoardSection-container">
                {player ? (
                    <>
                        {renderPlayerStats()}
                        {renderCardSection()} 
                    </>
                ) : (<></>)
                }    
            </div>              
        </>
    )
}

export default PlayerBoardSection;
