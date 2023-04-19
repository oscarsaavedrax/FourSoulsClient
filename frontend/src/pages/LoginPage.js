/* Developer: Daniel De Guzman */
/* LoginPage.js - frontend page where users will be able to login */

// import Libraries needed + specific stylesheet for page - D.D.
import React, { useState } from "react";

import "../css/stylesheet.css";

// import service needed to login. - D.D.
import AccountDataService from "../services/accountsService";

const LoginPage = (props) => {
  // keep track of username and password entered. - D.D.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  // when the username field is changed, set the username. - D.D.
  const handleUsernameInputChange = (event) => {
    setUsername(event.target.value);
  };

  // when the password field is changed, set the password - D.D.
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  // attempts to login to account. - D.D.
  const handleSubmit = (event) => {
    event.preventDefault();
    /* Calls account service to retrieve the account based on credentials - D.D. */
    AccountDataService.getByCredentials(username, password)
      .then((response) => {
        console.log(response.data);
        user.username = response.data.username;
        user.password = response.data.password;
        user.cityQuestion = response.data.cityQuestion;
        user.foodQuestion = response.data.foodQuestion;
        user.friendQuestion = response.data.friendQuestion;
        user.friendsList = response.data.friendsList;
        login();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /* Set the user to the account logged in and send to home page - D.D. */
  const login = () => {
    props.handleUser(user);
    props.history.push("/home-page");
  };

  /* Redirect to the register page - D.D. */
  const goToRegisterPage = () => {
    props.history.push("/register");
  };

  return (
    <div className="loginPage">
      {/* Title for the Login Page - D.D. */}
      <div>
        <h1 class="text">Four Souls Card Game Online</h1>
      </div>
      {/* Login Form for Users - D.D. */}
      <div>
        <form onSubmit={handleSubmit}>
          <table class="form-background">
            <tr>
              {/* Username Label - D.D. */}
              <td class="text form-label loginPage-form-usernameLabel">
                <label for="username">Email/Username</label>
              </td>
            </tr>
            <tr>
              {/* Username Input Box - D.D. */}
              <td class="form-inputBox loginPage-form-usernameInputBox">
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
              {/* Password Label - D.D. */}
              <td class="text form-label loginPage-form-passwordLabel">
                <label for="password">Password</label>
              </td>
            </tr>
            <tr>
              {/* Password Input Box - D.D. */}
              <td class="form-inputBox">
                <input
                  type="password"
                  class="form-inputBox"
                  id="password"
                  value={password}
                  onChange={handlePasswordInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              {/* Link for Forgot Password - D.D. */}
              <td>
                <h4 class="text loginPage-forgotPassword">
                  <a href="/recover-one">Forgot Password?</a>
                </h4>
              </td>
            </tr>
            <tr>
              {/* Button for Sign-In - D.D. */}
              <td>
                <button
                  class="text button loginPage-signInButton"
                  type="submit"
                >
                  Sign-In
                </button>
              </td>
            </tr>
          </table>
        </form>
        {/* Button to Continue as Guest - D.D. */}
        <button class="text button loginPage-continueAsGuestButton">
          Continue as Guest
        </button>
        {/* Button to Register for an Account - D.D. */}
        <button
          class="text button loginPage-registerForAccountButton"
          onClick={goToRegisterPage}
        >
          Register For Account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
