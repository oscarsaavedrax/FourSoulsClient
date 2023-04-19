import React from "react";
import DropDown from "../components/DropDown";
import "../css/stylesheet.css";

const LobbySettingsPage = () => {
  return (
    <div className="lobbySettingsPage">
      <div className="SettingsTables">
        {/*This table holds components that create the Turn Timer setting box*/}
        <table className="TurnTimerBox">
          <tr>
            <td>
              <img
                className="TurnTimerImage"
                img
                src={require("../assets/images/Turn_Timer_Icon.webp")}
                alt="TurnTimerImg"
              ></img>
            </td>
            <td>
              <label className="TurnTimer">Turn Timer</label>
            </td>
            <td>
              <input type="number" className="TurnTimerInput"></input>
            </td>
            <td>
              <label className="NoLimit">No Limit</label>
            </td>
          </tr>
        </table>
        {/*This table holds components that create the Reaction Timer setting box*/}
        <table className="ReactionTimerBox">
          <tr>
            <td>
              <img
                className="ReactionTimerImage"
                img
                src={require("../assets/images/Reaction_Timer_Icon.webp")}
                alt="TurnTimerImg"
              ></img>
            </td>
            <td>
              <label className="ReactionTimer">Reaction Timer</label>
            </td>
            <td>
              <input type="number" className="ReactionTimerInput"></input>
            </td>
            <td>
              <label className="MaxLimit">Max Time is 30s</label>
            </td>
          </tr>
        </table>
        {/*This table holds components that create the Trade Timer setting box*/}
        <table className="TradeTimerBox">
          <tr>
            <td>
              <img
                className="TradeTimerImage"
                img
                src={require("../assets/images/Trade_Timer_Icon.webp")}
                alt="TurnTimerImg"
              ></img>
            </td>
            <td>
              <label className="TradeTimer">Trade Timer</label>
            </td>
            <td>
              <input type="number" className="TradeTimerInput"></input>
            </td>
            <td>
              <label className="NoLimit">No Limit</label>
            </td>
          </tr>
        </table>
        {/*This table holds components that create the Extra Items setting box*/}
        <table className="ExtraItemsBox">
          <tr>
            <td>
              <img
                className="ExtraItemsImage"
                img
                src={require("../assets/images/Extra_Starting_Item_Icon.webp")}
                alt="TurnTimerImg"
              ></img>
            </td>
            <td>
              <label className="ExtraItems">Extra Starting Items</label>
            </td>
            <td>
              <input type="number" className="TurnTimerInput"></input>
            </td>
            <td>
              <label className="MaxLimit">Max Extra Cards is 3</label>
            </td>
          </tr>
        </table>
        {/*This table holds components that create the Friends Only setting box*/}
        <table className="FriendsOnlyBox">
          <tr>
            <td>
              <img
                className="FriendsOnlyImage"
                img
                src={require("../assets/images/Friends_Only_Icon.webp")}
                alt="TurnTimerImg"
              ></img>
            </td>
            <td>
              <label className="FriendsOnly">Friends Only</label>
            </td>
            <td>
              <button type="submit">
                <img
                  img
                  src={require("../assets/images/Dim_Lightbulb.webp")}
                  alt="TradeButton"
                ></img>
              </button>
            </td>
          </tr>
        </table>
        {/*This table holds components that create the Card Blocklist setting box*/}
        <table className="CardBlocklistBox">
          <tr>
            <td>
              <img
                className="CardBlocklistImage"
                img
                src={require("../assets/images/Card_Blocklist_Icon.webp")}
                alt="TurnTimerImg"
              ></img>
            </td>
            <td>
              <label className="CardBlocklist">Card Blocklist</label>
            </td>
            <td>
              <button className="EditButton" type="Button">
                Edit
              </button>
            </td>
          </tr>
        </table>
        {/*This table holds components that create the Use Preset setting box*/}
        <table className="UsePresetBox">
          <tr>
            <td>
              <img
                className="UsePresetImage"
                img
                src={require("../assets/images/Use_Preset_Icon.webp")}
                alt="TurnTimerImg"
              ></img>
            </td>
            <td>
              <label className="UsePreset">Use Preset</label>
            </td>
            <td>
              <DropDown />
            </td>
          </tr>
        </table>
      </div>
      {/*A submit type button to send the data to be saved*/}
      <button className="SaveButton" type="submit">
        Save
      </button>
    </div>
  );
};

export default LobbySettingsPage;
