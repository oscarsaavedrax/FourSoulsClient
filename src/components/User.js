// Component to fill and style the User view in Lobby Page
// Developer: Oscar Saavedra

// Import necessary components - O.S.
import React from "react";
import "../css/User.css";
import player1Icon from "../assets/icons/isaac-icon.png";

function User({ position, username = "Waiting for player" }) {
  return (
    <div className={position}>
      <img
        className="lobbyPage-player-icon"
        src={player1Icon}
        alt="Player Icon"
      ></img>
      <div className="lobbyPage-username-checkox-container">
        <h1 className="lobbyPage-player-username">{username}</h1>
      </div>
    </div>
  );
}
export default User;
