/* Developer: Daniel De Guzman */
/* FriendsList.js - component to render friends list for a user */
import React, {useState} from 'react'
import friendIcon from '../assets/icons/addfriendicon.png'
import AccountDataService from "../services/accountsService";

/* CURRENT BUG: FriendsList frontend does not get updated when a friend is added. need to log out and log in again - D.D. */
const FriendsList = (props) => {
    
    /* keep track of which username the user wants to add - D.D. */
    const [friendUsername, setFriendUsername] = useState("")
    const [friendsList, setFriendsList] = useState(props.user.friendsList)

    /* handle even for when the friend username input changes - D.D. */
    const handleFriendUsernameInputChange = event => {
        setFriendUsername(event.target.value);
    }

    /* when a friend username is submitted, call the service to add that friend - D.D. */
    const handleClick = () => {

        // payload/request for the PUT add friend request - D.D.
        var payload = {
            username: props.user.username,
            friendUsername: friendUsername
        }
        
        AccountDataService.addFriend(payload)
            .then(response => { 
                console.log("Add Friend Response: " + response.data)
                const newList = [...friendsList]
                newList.push(friendUsername)
                setFriendsList(newList)
                props.user.friendsList = newList;
            })
            .catch(e => {
                console.log("Add Friend Error: " + e)
            })
    }

    function getList() {
        const listItems = friendsList.map((friend) =>
        <li>{friend}</li>);
        return(<ul className="home-page-friend-list">{listItems}</ul>)
    }

    return(
        <div>
            {/*Container for the friend action section*/}
            <div className="home-page-friend-actions">Friends
                {/*************************************************************
                 * Need to learn to implement a list to be pulled from backend
                ***********************************************************/}
                <div className="home-page-friend-list-container">
                    <ul className="home-page-friend-list">
                        {friendsList.map(friend => {
                            return(
                                <li>{friend}</li>
                            )
                        })}
                    </ul>
                </div>
                {/*Container for the adding a friend*/}
                <div className="home-page-add-friend-section">
                    {/*Input username*/}
                    <input
                        className="home-page-add-friend-textbox"
                        type="text"
                        id="add-friend"
                        name="add-friend"
                        value={friendUsername}
                        onChange={handleFriendUsernameInputChange}
                        placeholder="Username"
                    />
                    {/*Button to add username*/}
                    <button className="home-page-add-friend-button">
                        <img
                        className="home-page-add-friend-icon"
                        src={friendIcon}
                        onClick={handleClick}
                        alt="Add Friend">
                        </img>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default FriendsList