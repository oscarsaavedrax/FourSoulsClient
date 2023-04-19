/* Developer: Daniel De Guzman */
/* SoulsSection.js - renders the souls section on the game board - D.D. */

import React from 'react'
import '../css/stylesheet.css'

/* cards = array of soul cards - D.D. */
const SoulsSection = ({cards}) => {

    /* Render the entire soul cards section - D.D. */
    const renderSoulsSection = () => {
        return(
            <>
            <div className="souls-main-container">
                {/* Main Container for the souls Section - D.D. */}
                <p class="souls-label">Souls</p>
                {/* Call the method to render thesouls cards - D.D. */}
                {renderSouls()}
            </div>
            </>
        )
    }

    /* Render the soul cards - D.D. */
    const renderSouls = () => {
        return(
            <>
            <div class="souls-flexbox-container">
                {cards.map((card) => <img src={card} className="souls-card" alt="Soul Card"></img>)}
            </div>
            </>
        )
    }

    return(
        <>
            {renderSoulsSection()}
        </>
    )
}
export default SoulsSection;