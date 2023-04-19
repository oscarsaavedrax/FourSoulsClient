/* Developer: Daniel De Guzman */
/* LobbyPage.js - where users will eba ble to join a lobby before the game. */

/* import necessary files, libraries, etc */
import "../css/stylesheet.css";
import logo from "../assets/images/foursoulslogo.png";
import User from "../components/User"; // Import User component
import Chat from "../components/Chat";
import { useEffect, useState, useContext } from "react";
import { SocketContext } from "../contexts/socket.js";

const LobbyPage = (props) => {
  // Get the socket from the context API - O.S.
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState([]);
  let lobbyCode = props.location.state.lobbyCode;

  // Get the list of users in lobby from server - O.S.
  useEffect(() => {
    socket.on("new-user-response", (list) => setUsers(list));
  }, [socket, users]);

  // Leave lobby room on the server - O.S.
  const handleLeaveLobbyButton = () => {
    if (lobbyCode !== "") {
      socket.emit("leave-lobby", lobbyCode);
    }
  };

  // Notify all users on lobby to start game - O.S.
  useEffect(() => {
    socket.on("start-game", (path) => {
      props.history.push(path);
    });

    return () => {
      socket.off("start-game");
    };
  }, [socket, props.history]);

  // Leave Lobby Page and go to Home Page - O.S.
  const goBackToHomePage = () => {
    handleLeaveLobbyButton();
    props.history.push({ pathname: "/home-page" });
  };

  // Start the game and send users to game board - O.S.
  const handleStartGameButton = () => {
    socket.emit("start-game", "/game-board");
    props.history.push({ pathname: "/game-board" });
  };
  
  return (
    <div className="lobbyPage">
      <img
        className="lobbyPage-title-logo"
        src={logo}
        alt="Four Souls Card Game Online"
      ></img>
      <div className="lobbyPage-main-container">
        <Chat username={props.user.username} room={lobbyCode} />
        <div className="lobbyPage-players-container">
          {users.map((user, index) => (
            <User
              key={user.socketID}
              position={"lobbyPage-player-" + index}
              username={user.username}
            ></User>
          ))}
          <div className="lobbyPage-waiting-ready-container">
            <button
              className="button text lobbyPage-start-game-button"
              onClick={handleStartGameButton}
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
      <div className="lobbyPage-bottom-container">
        <button className="button text lobbyPage-invite-friend-button">
          Invite Friend
        </button>
        <h2 className="lobbyPage-room-code text">Room Code: {lobbyCode}</h2>
        <button
          className="button text lobbyPage-leave-lobby-button"
          onClick={goBackToHomePage}
        >
          Leave Lobby
        </button>
      </div>
    </div>
  );
};

export default LobbyPage;
