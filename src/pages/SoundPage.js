/* Developer: Daniel De Guzman
/* SoundPage.js - demo to show which sound effects will be used in our game, and how they are played. */
import React from 'react'
/* import sounds - D.D. */
import cardDrop from '../assets/sounds/card-drop.mp3'
import cardShuffle from '../assets/sounds/card-shuffle.mp3'
import diceRoll from '../assets/sounds/dice-roll.mp3'
import cashRegister from '../assets/sounds/cash-register.mp3'
import takeDamageSound from '../assets/sounds/take-damage-sound.mp3'
const SoundPage = props => {

    /* Functions to play the sound, linked through onClick - D.D. */
    function playDrop(){
        new Audio(cardDrop).play()
    }

    function playShuffle(){
        new Audio(cardShuffle).play()
    }

    function playDiceRoll(){
        new Audio(diceRoll).play()
    }

    function playCashRegister(){
        new Audio(cashRegister).play()
    }

    function playTakeDamageSound(){
        new Audio(takeDamageSound).play()
    }

    return(
        <div>
            <button onClick={playDrop}>Card Drop or Click</button>
            <button onClick={playShuffle}>Card Shuffle</button>
            <button onClick={playDiceRoll}>Dice Roll</button>
            <button onClick={playCashRegister}>Cash Register/Buy from Shop</button>
            <button onClick={playTakeDamageSound}>Take Damage Sound</button>
        </div>
    )
}
export default SoundPage;