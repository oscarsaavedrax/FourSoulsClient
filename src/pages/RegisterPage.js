/* Developer: Daniel De Guzman */
/* RegisterPage.js - where users will be able to register for an account - D.D. */

// import Libraries needed + specific stylesheet for page - D.D.
import React, { useState } from "react";
import "../css/stylesheet.css";
// import service needed to login. - D.D.
import AccountDataService from "../services/accountsService";

const RegisterPage = (props) => {
  // keep track of username, password, confirmed password, and security question answers entered. - D.D.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [questionOne, setQuestionOne] = useState("");
  const [questionTwo, setQuestionTwo] = useState("");
  const [questionThree, setQuestionThree] = useState("");

  // when the username field is changed, set the username. - D.D.
  const handleUsernameInputChange = (event) => {
    setUsername(event.target.value);
  };

  // when the password field is changed, set the password - D.D.
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  // when the confirm password field is changed, set the password - D.D.
  const handleConfirmPasswordInputChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // when answer to question one field is changed, set question one - D.D.
  const handleQuestionOneInputChange = (event) => {
    setQuestionOne(event.target.value);
  };

  // when answer to question two field is changed, set question two - D.D.
  const handleQuestionTwoInputChange = (event) => {
    setQuestionTwo(event.target.value);
  };

  // when answer to question three field is changed, set question three - D.D.
  const handleQuestionThreeInputChange = (event) => {
    setQuestionThree(event.target.value);
  };

  // Call the service to post an account to the DB. - D.D.
  function handleSubmit(event) {
    event.preventDefault();
    if (password === confirmPassword) {
      // payload for POST request to add an account. - D.D.
      var newAccount = {
        username: username,
        password: password,
        cityQuestion: questionOne,
        foodQuestion: questionTwo,
        friendQuestion: questionThree,
      };

      // call the service to add the account - D.D.
      AccountDataService.createAccount(newAccount)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });

      // return to the login page. - D.D.
      props.history.push("/");
    }
  }

  return (
    <div className="registerPage">
      {/* Title for the Register Page - D.D. */}
      <div>
        <h1 class="text">Four Souls Card Game Online</h1>
      </div>
      {/* Title for the Register Box - D.D. */}
      <div>
        <h2 class="text">Register</h2>
      </div>
      {/* Register Form for Users - D.D. */}
      <div>
        <form onSubmit={handleSubmit}>
          <table class="form-background">
            <tr>
              {/* Username Label - D.D. */}
              <td class="text form-label registerPage-label">
                <label for="username">Username</label>
              </td>
            </tr>
            <tr>
              {/* Username Input Box - D.D. */}
              <td class="form-inputBox">
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
              <td class="text form-label registerPage-label">
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
              {/* Confirm Password Label - D.D. */}
              <td class="text form-label registerPage-label">
                <label for="confirmPassword">Confirm Password</label>
              </td>
            </tr>
            <tr>
              {/* Confirm Password Input Box - D.D. */}
              <td class="form-inputBox">
                <input
                  type="password"
                  class="form-inputBox"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              {/* Question 1 Label */}
              <td>
                <label class="form-label text">
                  In what city were you born?
                </label>
              </td>
            </tr>
            <tr>
              {/* Question 1 Input Box - D.D. */}
              <td className="form-inputBox">
                <input
                  type="text"
                  class="form-inputBox"
                  id="questionOne"
                  value={questionOne}
                  onChange={handleQuestionOneInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              {/* Question 2 Label - D.D. */}
              <td>
                <label class="form-label text">
                  What is your favorite food?
                </label>
              </td>
            </tr>
            <tr>
              {/* Question 2 Input Box - D.D. */}
              <td className="form-inputBox">
                <input
                  type="text"
                  class="form-inputBox"
                  id="questionOne"
                  value={questionTwo}
                  onChange={handleQuestionTwoInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              {/* Question 3 Label - D.D. */}
              <td>
                <label class="form-label text">
                  What is the name of your best friend?
                </label>
              </td>
            </tr>
            <tr>
              {/* Question 3 Input Box - D.D. */}
              <td className="form-inputBox">
                <input
                  type="text"
                  class="form-inputBox"
                  id="questionOne"
                  value={questionThree}
                  onChange={handleQuestionThreeInputChange}
                  required
                />
              </td>
            </tr>
            {/* Confirm Button - D.D. */}
            <tr>
              <button class="text button registerPage-confirmButton">
                Confirm
              </button>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
