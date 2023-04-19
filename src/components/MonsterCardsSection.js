/* Developer: Daniel De Guzman */
/* MonsterCardsSection.js - renders the monster card section on the game board */
import React from 'react'
import '../css/stylesheet.css'
import monsterCardBack from '../assets/images/card-pictures/card-drop-targets/monster-card-back.png'
import {ImageService} from '../services/imagesService.js';
/* cards = array of monster cards - D.D. */
const MonsterCardsSection = ({activeEnemies, cards}) => {

    /* Render the monster cards - D.D. */
    const renderMonsterCards = () => {
        return(
            <>
                {activeEnemies.cards ? (
                    <>
                        {activeEnemies.cards.map((item) => {
                            return(<img class="monsterCards-activeMonster" src={ImageService[item.entity.card.name]} alt="Monster Card"></img>)
                        })}
                    </>
                ) : (<></>)
                }
            </>
        )
    }

    /* Render the entire monster cards section - D.D. */
    const renderMonsterCardsSection = () => {
        return(
            <>
                {/* Main Container for the Monster Cards Section - D.D. */}
                <div class="monsterCards-main-container">
                    <div className="monsterCards-monsterCardBack-container">
                        <img class="monsterCards-monsterCardBack" src={monsterCardBack} alt="Monster Card Back"></img>
                    </div>
                    <div class="monsterCards-activeCards-container">
                        {renderMonsterCards()}
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            {activeEnemies ? 
            (
                <>
                    {renderMonsterCardsSection()}
                </>
            ) : (<></>)
            }

        </>
    )
}

export default MonsterCardsSection;