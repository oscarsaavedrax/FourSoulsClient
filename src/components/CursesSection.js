/* Developer: Daniel De Guzman */
/* CursesSection.js - renders the curses section on the game board - D.D. */

import React from 'react'
import '../css/stylesheet.css'
/* cards = array of curse cards - D.D. */
const CursesSection = ({cards}) => {

    /* Render the entire curse cards section - D.D. */
    const renderCursesSection = () => {
        return(
            <>
            <div class="curses-main-container">
                {/* Label for the Curses Section - D.D. */}
                <p class="curses-label">Curses</p>
                {/* Call the method to render the curse cards - D.D. */}
                {renderCurses()}
            </div>
            </>
        )
    }

    /* Render the curse cards - D.D. */
    const renderCurses = () => {
        return(
        <>
            <div class="curses-flexbox-container">
                {cards.map((card) => <img src={card} className="curses-card" alt="Curse Card"></img>)}
            </div>
        </>
        )
    }
    
    return(
        <>
        {renderCursesSection()}
        </>
    )
}

export default CursesSection;