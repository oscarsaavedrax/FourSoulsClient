/* Developer: Daniel De Guzman */
/* GameBoard.js - renders the game board. */

/* Import Libraries and Pictures needed... - D.D. */
import React, { useState, useEffect } from "react";
import "../css/stylesheet.css";
import player1Icon from "../assets/icons/isaac-icon.png";
import diceIcon from "../assets/images/diceIcon.jpg";
import aPenny from "../assets/images/card-pictures/loot-cards/a-penny.png";
import lootCardBack from "../assets/images/card-pictures/card-drop-targets/loot-card-back.png";
import theD10 from "../assets/images/card-pictures/treasure-cards/the-d10.png";
import smelter from "../assets/images/card-pictures/treasure-cards/smelter.png";
import fatty from "../assets/images/card-pictures/monster-cards/fatty.png";
import greed from "../assets/images/card-pictures/monster-cards/greed.png";
import soulOfGreed from "../assets/images/card-pictures/soul-cards/soul-of-greed.png";
import cursedFatty from "../assets/images/card-pictures/curse-cards/cursed-fatty.png";
import isaac from "../assets/images/card-pictures/character-cards/isaac.png";
import PlayersList from "../components/PlayersList.js";
import TurnHistory from "../components/TurnHistory.js";
import PlayerBoardSection from "../components/PlayerBoardSection.js";
import TreasureCardsSection from "../components/TreasureCardsSection.js";
import MonsterCardsSection from "../components/MonsterCardsSection.js";
import YourHandSection from "../components/YourHandSection.js";
import CursesSection from "../components/CursesSection.js";
import SoulsSection from "../components/SoulsSection.js";

const GameBoard = (props) => {
  document.body.className = "gameboard-background";

  /* playerUsernames and playerIcons for PlayersList - D.D. */
  /* These will be fetched from a DB or Game Server later... - D.D. */
  // var playerUsernames = ["HawtDawg", "DSTITAN", "Cahmomille", "Jacewa"]
  var playerIcons = [player1Icon, player1Icon, player1Icon, player1Icon];

  /* turns for TurnHistory - D.D. */
  /* Eventually these will be formatted based on an actual term when the game server is set up - D.D. */
  var turns = [
    "Player 1 played a card",
    "Player 2 played a card",
    "Player 3 played a card",
    "Player 4 played a card",
  ];

  /* cards for player section - D.D. */
  /* This array will eventually turn into a fetch function for the game server. - D.D. */
  var cards = [isaac, theD10, aPenny, smelter];

  /* cards for treasure section - D.D. */
  /* This array will eventually turn into a fetch function for the game server. - D.D. */
  var treasureCards = [theD10, smelter];

  /* cards for monster section - D.D. */
  /* This array will eventually turn into a fetch function for the game server. - D.D. */
  var monsterCards = [fatty, greed];

  /* cards for curses section - D.D. */
  /* This array will eventually turn into a fetch function for the game server. - D.D. */
  var curseCards = [cursedFatty, cursedFatty, cursedFatty, cursedFatty];

  /* cards for souls section - D.D. */
  /* This array will eventually turn into a fetch function for the game server. - D.D. */
  var soulCards = [soulOfGreed, soulOfGreed, soulOfGreed, soulOfGreed];

  var character = [isaac];

  let [playersList, setPlayersList] = useState([]);
  let [activeTreasures, setActiveTreasures] = useState([]);
  /* cards for monster section - D.D. */
  let [activeEnemies, setActiveEnemies] = useState([]);
  /* cards for yourHand section - D.D. */
  let [hand, setHand] = useState([]);

  /* Fetch the game state from the python process on refresh. */
  /* This simulates the first state of the game */
  useEffect(async () => {
    try {
      let response = await fetch(`http://localhost:3002/python`);
      let data = await response.json();
      setPlayersList(data.players);
      setActiveTreasures(data.activeTreasures);
      setActiveEnemies(data.activeEnemies);
      setHand(data.players[0].hand.cards);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <>
      {/* Main Gameboard Page Container - D.D. */}
      <div class="gameboard-container">
        {/* <img src={ImageService["Isaac"]}></img> */}
        {/* Container for Top Section of Game Board Page - D.D. */}
        <div class="gameboard-top-container">
          {/* Render the PlayersList - D.D.*/}
          <PlayersList playersList={playersList} playerIcons={playerIcons} />
          {/* Container for the Board Section - D.D. */}
          <div class="gameboard-board-container">
            {/* Container for Player 1 and 2 (Top Player Containers) - D.D.*/}
            <div class="gameboard-board-player1AndPlayer2-container">
              {/* Render Player 1 and 2 - D.D.*/}
              {/* Current Bug with PlayerBoardSection where condition for top and bottom section isn't evaluating properly - D.D. */}
              <PlayerBoardSection
                player={playersList[0]}
                character={"The Battery"}
                cards={cards}
                health={1}
                cardsInHand={7}
                coins={23}
                souls={2}
                isBottom={false}
              />
              <PlayerBoardSection
                character={character}
                cards={cards}
                health={7}
                cardsInHand={3}
                coins={11}
                souls={1}
                isBottom={false}
              />
            </div>
            {/* Main container for treasureLootMonster section */}
            <div class="gameboard-board-treasureLootMonster-container">
              {/* Treasure Container */}
              {/* Render the treasure section */}
              <TreasureCardsSection
                activeTreasures={activeTreasures}
                cards={treasureCards}
              />
              {/* Dice and Loot Container */}
              <div class="gameboard-board-loot-container">
                {/* Dice Section */}
                <div class="gameboard-board-diceIcon-container">
                  <img
                    class="gameboard-board-diceIcon"
                    src={diceIcon}
                    alt="diceIcon"
                  ></img>
                </div>
                {/* Loot Section */}
                <div class="gameboard-board-lootCardBack-container">
                  <img
                    class="gameboard-board-lootCardBack"
                    src={lootCardBack}
                    alt="lootCardBack"
                  ></img>
                </div>
              </div>
              {/* Monster Container */}
              {/* Render the Monster Section */}
              <MonsterCardsSection
                activeEnemies={activeEnemies}
                cards={monsterCards}
              />
            </div>
            {/* Container for Player 3 and 4 (Bottom Player Containers) - D.D.*/}
            <div class="gameboard-board-player3AndPlayer4-container">
              {/* Render Player 3 and 4 - D.D.*/}
              <PlayerBoardSection
                character={character}
                cards={cards}
                health={7}
                cardsInHand={3}
                coins={11}
                souls={1}
                isBottom={true}
              />
              <PlayerBoardSection
                character={character}
                cards={cards}
                health={7}
                cardsInHand={3}
                coins={11}
                souls={1}
                isBottom={true}
              />
            </div>
          </div>
          {/* Render the Turn History Section - D.D. */}
          <TurnHistory turns={turns} />
        </div>
        {/* Bottom section of gameboard, yourHand, curses, souls section */}
        <div class="gameboard-bottom-container">
          <div class="gameboard-cards-container">
            {/* Render YourHandSection */}
            <YourHandSection cards={hand} />
            {/* Render CursesSection */}
            <CursesSection cards={curseCards} />
            {/* Render SoulsSection */}
            <SoulsSection cards={soulCards} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBoard;
