/* Description: Structure for the Home Page of the Four Souls Online Card Game
 *  Developer  : Oscar Saavedra                                          */
 /* FriendsList Implementation - Daniel De Guzman */
 import '../css/HomePage.css';
 import FriendsList from "../components/FriendsList"
 import logo from "../assets/images/foursoulslogo.png";
 import crownIcon from "../assets/icons/crownicon.png";
 import goBackIcon from "../assets/icons/gobackicon.png";
 import profileIcon from "../assets/icons/profileicon.png";
 import settingsIcon from "../assets/icons/settingsicon.png";
 import { useContext, useEffect, useState } from "react";
 import { SocketContext } from "../contexts/socket.js";

 // import service needed to add a friend. - D.D.
 import AccountDataService from "../services/accountsService";
 
 const HomePage = (props) => {
   // Get the socket from the context API - O.S.
   const socket = useContext(SocketContext);
   //Lobby code state - O.S
   const [lobbyCode, setLobbyCode] = useState("");
   // Store the username in a local variable - O.S.
   let username = props.user.username;
 
   // Connect to the game server - O.S.
   useEffect(() => {
     // Attach the username to the socket - O.S.
     socket.auth = { username };
     // Make a connection to the game server - O.S.
     socket.connect();
   }, [socket, username]);
 
     // keep track of the friend username to add - D.D.
     const [friendUsername, setFriendUsername] = useState("")
 
     // when the friend username box is changed, set the friend username - D.D.
     const handleFriendUsernameInputChange = event => {
         setFriendUsername(event.target.value);
     }
 
     // send the friend request. for now, friends will automatically become friends here. - D.D.
     const handleSendFriendRequest = (event) => {
         event.preventDefault();
         // payload/request for the PUT add friend request - D.D.
         var payload = {
             username: props.user.username,
             friendUsername: friendUsername
         }
 
         // call the service to add the friends. - D.D.
         AccountDataService.addFriend(payload)
             .then(response => {
                 console.log(response.data);
             })
             .catch(e => {
                 console.log(e);
             })
         // NEED TO FIGURE OUT HOW TO REFRESH THE PAGE WITHOUT LOSING THE USER.
     }
 
 
   //Function to handle the lobby code input - O.S
   const handleLobbyCodeInputChange = (event) => {
     setLobbyCode(event.target.value);
   };
 
   // Function to handle submit button - O.S.
   const handleSubmit = (e) => {
     e.preventDefault();
     // Attempt to join a lobby - O.S.
     if (lobbyCode !== "") {
       // Send message to server to join a lobby - O.S.
       socket.emit("join-lobby", lobbyCode);
       // Listen for verification to join lobby from server - O.S.
       socket.on("join-lobby-success", (isJoined) => {
         // Success then move to lobby page, else alert lobby is full - O.S.
         if (isJoined) {
           goToLobbyPage();
         } else {
           alert("Lobby is already full.");
           setLobbyCode("");
         }
       });
     }
   };
 
   const goToInstructions = () => {
     props.history.push("/instructions-page");
   };
 
   const goToLobbySettings = () => {
     props.history.push("/lobby-settings");
   };
 
   const goToSettings = () => {
     props.history.push("/user-settings");
   };
 
   const goToLobbyPage = () => {
     // Pass lobbycode to new page - O.S.
     props.history.push({
       pathname: "/lobby-page",
       state: { lobbyCode: lobbyCode },
     });
   };
 
   return (
     <div className="homePage">
       {/*Container for the header section*/}
       <div className="home-page-header">
         {/*Main image logo*/}
         <img
           className="home-page-title-logo"
           src={logo}
           alt="Four Souls Card Game Online "
         ></img>
         {/*Page title*/}
         <div className="home-page-title">Home Page</div>
       </div>
       {/*Container for the main section*/}
       <div className="home-page-main-content">
         {/*Container for the game section*/}
         <div className="home-page-game-actions">
           {/*Form for the join lobby section*/}
           <form
             className="home-page-join-lobby-section"
             onSubmit={handleSubmit}
           >
             Join Lobby
             <input
               type="text"
               name="lobbyCode"
               id="lobbyCode"
               className="home-page-lobby-code-textbox"
               placeholder="Enter lobby code"
               value={lobbyCode}
               onChange={handleLobbyCodeInputChange}
             />
             <button className="home-page-submit-button">Submit</button>
           </form>
           {/*Button for tutorial mode*/}
           <button
             className="home-page-tutorial-mode-button"
             onClick={goToInstructions}
           >
             Instructions
           </button>
         </div>
 
         {/* FriendsList component - D.D. */}
         <FriendsList {...props} />
         
       </div>
 
       {/*Container for the footer*/}
       <div className="home-page-footer">
         {/*Container for the left section*/}
         <div className="home-page-left-section">
           {/*Button to go back*/}
           <button className="home-page-go-back-button">
             <img
               className="home-page-go-back-icon"
               src={goBackIcon}
               alt="Go Back"
             ></img>
           </button>
           {/*Button for settings*/}
           <button
             className="home-page-settings-button"
             onClick={goToLobbySettings}
           >
             <img
               className="home-page-settings-icon"
               src={settingsIcon}
               alt="Settings"
             ></img>
           </button>
           {/*Button for profile settings*/}
           <button className="home-page-profile-button" onClick={goToSettings}>
             <img
               className="home-page-profile-icon"
               src={profileIcon}
               alt="Profile"
             ></img>
           </button>
         </div>
 
         {/*Container for the middle section*/}
         <div className="home-page-middle-section">{props.user.username}</div>
 
         {/*Container for the right section*/}
         <div className="home-page-right-section">
           {/*Button for user ranking*/}
           <button className="home-page-ranking-button">
             <img
               className="home-page-ranking-icon"
               src={crownIcon}
               alt="Crown"
             ></img>
           </button>
           {/*Container for the user level*/}
           <div className="home-page-ranking">12</div>
         </div>
       </div>
     </div>
   );
 };
 
 export default HomePage;
 