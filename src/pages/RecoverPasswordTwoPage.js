/* Developer: Daniel De Guzman */
/* RecoverPasswordTwo.js - where users will answer their security questions to recover their password. - D.D. */

// import Libraries needed + specific stylesheet for page - D.D.
import React, { useState } from "react";
import "../css/stylesheet.css";

const RecoverPasswordTwoPage = (props) => {
  /* Keep track of answers for questions 1-3 - D.D. */
  const [questionOne, setQuestionOne] = useState("");
  const [questionTwo, setQuestionTwo] = useState("");
  const [questionThree, setQuestionThree] = useState("");

  /* Handles the input for question one - D.D. */
  const handleQuestionOneInputChange = (event) => {
    setQuestionOne(event.target.value);
  };

  /* Handles the input for question two - D.D. */
  const handleQuestionTwoInputChange = (event) => {
    setQuestionTwo(event.target.value);
  };

  /* Handles the input for question three - D.D. */
  const handleQuestionThreeInputChange = (event) => {
    setQuestionThree(event.target.value);
  };

  /* Check if the security questions answered match the account's answers. - D.D. */
  const handleSubmit = (event) => {
    event.preventDefault();
    /* If the answers match the account answers, move onto step 3 of recover password. - D.D. */
    if (
      questionOne === props.user.cityQuestion &&
      questionTwo === props.user.foodQuestion &&
      questionThree === props.user.friendQuestion
    ) {
      props.history.push("/recover-three");
    }
  };

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
                <h2 class="text recoverPasswordTwo-recoverPasswordTitle">
                  Recover Password?
                </h2>
              </td>
            </tr>
            <tr>
              {/* Answer Following Questions Paragraph - D.D. */}
              <td>
                <p class="text recoverPasswordTwo-paragraph">
                  Answer the following questions
                </p>
              </td>
            </tr>
            <tr>
              {/* City Question Label - D.D. */}
              <td>
                <label class="form-label text recoverPasswordTwo-cityQuestionLabel">
                  In what city were you born?
                </label>
              </td>
            </tr>
            <tr>
              {/* City Question Input Box - D.D. */}
              <td className="form-inputBox recoverPasswordTwo-cityInputBox">
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
              {/* Food Question Label - D.D. */}
              <td>
                <label class="form-label text recoverPasswordTwo-foodQuestionLabel">
                  What is your favorite food?
                </label>
              </td>
            </tr>
            <tr>
              {/* Food Question Input Box - D.D. */}
              <td className="form-inputBox recoverPasswordTwo-foodInputBox">
                <input
                  type="text"
                  class="form-inputBox"
                  id="questionTwo"
                  value={questionTwo}
                  onChange={handleQuestionTwoInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              {/* Friend Question Label - D.D. */}
              <td>
                <label class="form-label text recoverPasswordTwo-friendQuestionLabel">
                  What is the name of your best friend?
                </label>
              </td>
            </tr>
            <tr>
              {/* Friend Question Input Box - D.D. */}
              <td className="form-inputBox recoverPasswordTwo-friendInputBox">
                <input
                  type="text"
                  class="form-inputBox"
                  id="questionThree"
                  value={questionThree}
                  onChange={handleQuestionThreeInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              {/* Recover Password Button - D.D. */}
              <td>
                <button
                  class="text button recoverPasswordTwo-recoverPasswordButton"
                  type="submit"
                >
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

export default RecoverPasswordTwoPage;
