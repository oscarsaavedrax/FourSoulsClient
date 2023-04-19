/* Developer: Daniel De Guzman, Oscar Saavedra */
/* App.js - frontend server */

/* Import Libraries and pages needed - D.D. */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import RecoverPasswordOnePage from "./pages/RecoverPasswordOnePage.js";
import RecoverPasswordTwoPage from "./pages/RecoverPasswordTwoPage.js";
import RecoverPasswordThreePage from "./pages/RecoverPasswordThreePage.js";
import HomePage from "./pages/HomePage";
import LobbySettingsPage from "./pages/LobbySettingsPage.js";
import SettingPage from "./pages/SettingPage.js";
import InstructionsPage from "./pages/InstructionsPage";
import LobbyPage from "./pages/LobbyPage";
import GameBoard from "./pages/GameBoard.js";
import useLocalStorage from "../src/hooks/useLocalStorage";
import { SocketContext, socket } from "./contexts/socket";
// For testing only - O.S 2/22 ********************************************
import TestPage from "./pages/TestPage.js";
import SoundPage from './pages/SoundPage.js';
function App() {
  /* keep track of user logged in - D.D. */
  const [user, setUser] = useLocalStorage("user");

  /* set the user logged in - D.D. */
  async function handleUser(user = null) {
    setUser(user);
  }

  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        {/* Router to handle different pages/views of the website - D.D. */}
        <Router>
          <Switch>
            <Route
              path="/lobby-settings"
              render={(props) => <LobbySettingsPage />}
            />

            <Route path="/user-settings" render={(props) => <SettingPage />} />

            {/*Call in the Home Page for the main application  -- O.S. */}
            <Route
              path="/home-page"
              render={(props) => <HomePage {...props} user={user} />}
            />

            {/* RegisterPage Path - D.D. */}
            <Route
              path="/register"
              render={(props) => <RegisterPage {...props} />}
            />

            {/* RecoverPasswordOnePage Path - D.D. */}
            <Route
              path="/recover-one"
              render={(props) => (
                <RecoverPasswordOnePage
                  {...props}
                  user={user}
                  handleUser={handleUser}
                />
              )}
            />

            {/* RecoverPasswordTwoPage Path - D.D. */}
            <Route
              path="/recover-two"
              render={(props) => (
                <RecoverPasswordTwoPage
                  {...props}
                  user={user}
                  handleUser={handleUser}
                />
              )}
            />

            {/* RecoverPasswordThreePage Path - D.D. */}
            <Route
              path="/recover-three"
              render={(props) => (
                <RecoverPasswordThreePage
                  {...props}
                  user={user}
                  handleUser={handleUser}
                />
              )}
            />

            {/* InstructionsPage Path - D.D. */}
            <Route
              path="/instructions-page"
              render={(props) => <InstructionsPage {...props} />}
            />

            {/* GameBoard Path - D.D. */}
            <Route
              path="/game-board"
              render={(props) => <GameBoard {...props} />}
            />

            {/* LobbyPage Path - D.D. */}
            <Route
              path="/lobby-page"
              render={(props) => <LobbyPage {...props} user={user} />}
            />

            {/* LoginPage Path - D.D. */}
            <Route
              path="/"
              render={(props) => (
                <LoginPage {...props} user={user} handleUser={handleUser} />
              )}
            />
            
            {/* TestPage Path - D.D. */}
            <Route 
              path="/test-page"
              render={(props) => (
                <TestPage {...props} />
              )}
            />

            <Route
              path="/sound-page"
              render={(props) => (
                <SoundPage {...props} />
              )}
            />
          </Switch>
        </Router>
      </SocketContext.Provider>
    </div>       
 );
}

export default App;
