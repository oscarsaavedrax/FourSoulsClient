/* Developer: Daniel De Guzma */
/* TurnHistory.js - renders the turn history of the game board */
/* Turn History will be fetched by the Game Server eventually */

import React from 'react'
import '../css/stylesheet.css';

/* turns is an array of moves/actions made in the game - D.D. */
/* this will eventually be fetched from the game server - D.D. */
const TurnHistory = ({turns}) => {

    /* Render the list of turns made - D.D. */
    const turnContent = turns.map((turn) => {
        return(
            <>
                <p>{turn}</p><br></br>
            </>
        )
    })

    return(
        <>
        {/* Main Turn History Container - D.D. */}
        <div class="gameboard-turnHistory-container">
            {/* Turn History Header Container - D.D. */}
            <div class="gameboard-turnHistory-label-container">
                <p class="text">Turn History</p>
            </div>
            {/* Turn History Content Container - D.D. */}
            <div class="gameboard-turnHistory-history-container">
                {turnContent}
            </div>
        </div>
        </>
    )
}

export default TurnHistory;