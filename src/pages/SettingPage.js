import "../css/stylesheet.css";
import React from "react";
// import Button from '../components/Button'
import DropDown from "../components/DropDown";
import Slider from "../components/Slider";

const SettingPage = ({ username }) => {
  return (
    <div className="settingsPage">
      <h1 className="title text">
        {" "}
        BrimstoneFan27 <br /> Settings
      </h1>
      <div>
        <table className="userSettingsPage-box">
          <tr>
            <td>
              <label className="text userSettingsPage-username-label">
                Username:
              </label>
            </td>
            <td>
              <div className="userSettingsPage-username-box">
                <label className="text userSettingsPage-username">
                  BrimstoneFan27
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <button className="text userSettingsPage-change-username-button">
                Change Username
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <label className="text userSettingsPage-music-volume-label">
                Music Volume:
              </label>
            </td>
            <td>
              <div className="userSettingsPage-music-volume-slider-container">
                <Slider />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label className="text userSettingsPage-sfx-volume-label">
                SFX Volume:
              </label>
            </td>
            <td>
              <div className="userSettingsPage-sfx-volume-slider-container">
                <Slider />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label className="text userSettingsPage-game-presets-label">
                Game Presets:
              </label>
            </td>
            <td>
              <DropDown />
            </td>
          </tr>
          <tr>
            <td>
              <button className="text userSettingsPage-create-new-preset-button">
                Create New Preset
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    /*
    <header>
        <h1>BrimstoneFan27</h1>
        <h2>Hello</h2>
        <Slider/>
        <Slider/>
        <Button color='Crimson' text='Change Username' />
        <Button color='Crimson' text='Create Preset' />
        <DropDown />
    </header>
    */
  );
};

export default SettingPage;
