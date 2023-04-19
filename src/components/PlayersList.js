/* Developer: Daniel De Guzman */
/* PlayersList.js - renders the list of players on the game board. */
import React from 'react';
import '../css/stylesheet.css';

/* playerUsernames = array of playerUsernames - D.D. */
/* playerIcons = array of playerIcons for each player - D.D. */
const PlayersList = ({playersList, playerIcons}) => {

    /* Render the entire PlayersList - D.D. */
    const renderPlayerList = () => {
        return(
            /* Main Container for PlayersList - D.D. */
            <div class="playersList-container">
                {/* Header for Players - D.D. */}
                <p class="text">Players</p>
                {/* Call the method to render usernames and icons - D.D. */}
                {playersAndIcons}
            </div>
        )
    }

    /* Render the list of player usernames and player icons - D.D. */
    /* map function has two params, username and then index in the array - D.D.*/
    const playersAndIcons = playersList.map((player, index) => {
        /* playerIcon for current playerUsername - D.D.*/
        const playerIcon = playerIcons[index];
        return(
            /* Main Container for each individual player - D.D. */
            <div class="playersList-player-container">
                {/* Container for the player icon - D.D. */}
                <div class="playersList-player-icon-container">
                    <img className="gameboard-player-icon"
                        src={playerIcon}
                        alt="Player Icon">
                    </img>
                </div>
                {/* Username Container - D.D. */}
                <div class="playersList-player-username-container">
                    <p className="playersList-player-username">{player.playerNumber}</p>
                </div>
            </div>
        )
    })

    return(
        <>
            {renderPlayerList()}
        </>
    )
}
export default PlayersList;