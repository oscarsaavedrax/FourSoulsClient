/* Developer: Daniel De Guzman */
/* RecoverPasswordThreePage.js - where users will set their new password. */

// import Libraries needed + specific stylesheet for page - D.D.
import React, { useState } from "react";
import "../css/stylesheet.css";

// import service needed to login. - D.D.
import AccountDataService from "../services/accountsService";

const RecoverPasswordThreePage = (props) => {
  // keep track of new password entered. - D.D.
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // when the new password field is changed, set the new password. - D.D.
  const handleNewPasswordInputChange = (event) => {
    setNewPassword(event.target.value);
  };

  // when the confirm password field is changed, set the confirm password. - D.D.
  const handleConfirmPasswordInputChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Update the account password and return back to the login screen - D.D.
  function handleSubmit(event) {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      // payload for the PUT request - D.D.
      var payload = {
        accountId: props.user.accountId,
        username: props.user.username,
        password: newPassword,
      };

      // call the service to update the password - D.D.
      AccountDataService.updatePassword(payload)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });

      // return back to the login screen - D.D.
      props.history.push("/");
    }
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
              {/*Enter New Password Label - D.D. */}
              <td class="text form-label recoverPasswordThree-enterNewPasswordLabel">
                <label for="newPassword">Enter New Password</label>
              </td>
            </tr>
            <tr>
              {/* Password Input Box - D.D. */}
              <td class="form-inputBox recoverPasswordThree-enterNewPasswordInputBox">
                <input
                  class="form-inputBox"
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={handleNewPasswordInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              {/* Confirm New Password Label - D.D. */}
              <td class="text form-label recoverPasswordThree-confirmNewPasswordLabel">
                <label for="confirmPassword">Confirm New Password</label>
              </td>
            </tr>
            <tr>
              {/* Confirm New Password Input Box - D.D. */}
              <td class="form-inputBox recoverPasswordThree-confirmNewPasswordInputBox">
                <input
                  class="form-inputBox"
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              {/* Button to Recover Password - D.D. */}
              <td>
                <button class="text button recoverPasswordThree-recoverPasswordButton">
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

export default RecoverPasswordThreePage;
