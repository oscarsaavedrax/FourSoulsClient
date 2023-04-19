/* Developer: Daniel De Guzman */
/* InstructionsPage.js - place for users to read the rules/instructions of the game. */

// import Libraries needed + specific stylesheet for page. - D.D.
import React from "react";

import "../css/stylesheet.css";

// Instructions Page is a static page, no elements are being tracked. - D.D.
const InstructionsPage = (props) => {
  return (
    <div className="instructionsPage">
      <div>
        <h1 class="text">Instructions Page</h1>
      </div>
      <div class="instructionsPage-rulesContainer">
        <p class="text">
          Start Phase The Recharge Step. The active player (the player whose
          turn it is) recharges (turns upright) objects they control. Abilities
          that trigger at the start of the turn trigger, then priority passes.
          The Loot Step. The active player loots 1, then priority passes. Action
          Phase When the action phase starts, the active player gets a loot play
          that lasts until the end of the turn. During the action phase, the
          active player may: Activate any abilities they control. Play a loot
          card using their loot play. Declare an attack. Declare a purchase. End
          the turn. Priority passes after each of the above. Players can make a
          maximum of one attack and one purchase per turn, by default. Active
          players may do as many or as few of the above actions as they wish on
          their turn. Players may only declare an attack, declare a purchase, or
          end the turn when the stack is empty – i.e. not in response to
          anything. Note: Most characters can play a second loot card on their
          turn by using the ↷ ability of their character. However, they can also
          save their character’s charge and activate it to play a loot card on
          another player’s turn! End Phase Abilities that trigger at the end of
          the turn trigger, then priority passes. The active player discards
          down to their max hand size (10 by default). If a monster died during
          the turn, the active player may put a room into discard (if playing
          with the room deck). The turn ends and is passed to the next player.
          Everything with an HP stat heals to full HP, including any dead
          players, and abilities and effects that last till end of turn end.
        </p>
      </div>
    </div>
  );
};
export default InstructionsPage;
