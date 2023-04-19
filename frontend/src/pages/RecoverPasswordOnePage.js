/* Developer: Daniel De Guzman */
/* RecoverPasswordOnePage.js - where users will enter their username to recover their password. */

// import Libraries needed + specific stylesheet for page - D.D.
import React, { useState } from "react";
import "../css/stylesheet.css";

// import service needed to login. - D.D.
import AccountDataService from "../services/accountsService";
const RecoverPasswordOnePage = (props) => {
  // keep track of username entered. - D.D.
  const [username, setUsername] = useState("");

  // when the username field is changed, set the username. - D.D.
  const handleUsernameInputChange = (event) => {
    setUsername(event.target.value);
  };

  // keep track of user when form is submitted. - D.D.
  let user = {
    accountId: "",
    username: "",
    password: "",
    cityQuestion: "",
    foodQuestion: "",
    friendQuestion: "",
    friendsList: [],
  };

  // eventually, this function will validate input entered and if successful
  // send an username for password recovery. but for now, prevent the screen from refreshing. - D.D.
  function handleSubmit(event) {
    event.preventDefault();
    AccountDataService.getByUsername(username)
      .then((response) => {
        console.log(response.data);
        user.accountId = response.data._id;
        user.username = response.data.username;
        user.password = response.data.password;
        user.cityQuestion = response.data.cityQuestion;
        user.foodQuestion = response.data.foodQuestion;
        user.friendQuestion = response.data.friendQuestion;
        user.friendsList = response.data.friendsList;

        /* if the username exists, move onto step two of recover password - D.D. */
        props.handleUser(user);
        props.history.push("/recover-two");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="recoverPage">
      {/* Title for the Recover Page - D.D. */}
      <div>
        <h1 class="text">Four Souls Card Game Online</h1>
      </div>
      {/* Recover Password Form - D.D. */}
      <div>
        <form onSubmit={handleSubmit}>
          <table class="form-background">
            <tr>
              {/* Recover Password Title - D.D. */}
              <td>
                <h2 class="text recoverPassword-recoverPasswordTitle">
                  Recover Password?
                </h2>
              </td>
            </tr>
            <tr>
              {/* Enter Username Label - D.D. */}
              <td class="text form-label recoverPasswordOne-enterUsernameLabel">
                <label for="email">Enter Username</label>
              </td>
            </tr>
            <tr>
              {/* Username Input Box - D.D. */}
              <td class="form-inputBox recoverPasswordOne-enterUsernameInputBox">
                <input
                  type="text"
                  class="form-inputBox"
                  id="username"
                  value={username}
                  onChange={handleUsernameInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              {/* Button to submit username - D.D. */}
              <td>
                <button class="text button recoverPasswordOne-recoverPasswordButton">
                  Recover Password
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default RecoverPasswordOnePage;
