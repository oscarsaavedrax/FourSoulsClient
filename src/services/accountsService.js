/* Developer: Daniel De Guzman */
/* accountsService.js - service to call http requests to the account DB */

/* import base url from http-common - D.D. */
import http from "../http-common";

class AccountDataService{

    /* HTTP Request to get account by credentials - D.D. */
    getByCredentials(username, password){
        return http.get(`/accounts/username/${username}/password/${password}`);
    }

    /* HTTP Request to get account by username - D.D. */
    getByUsername(username){
        return http.get(`/accounts/username/${username}`)
    }

    /* HTTP Request to create an account - D.D. */
    createAccount(data){
        return http.post("/accounts/account", data)
    }

    /* HTTP Request to update an account password - D.D. */
    updatePassword(data){
        return http.put("/accounts/account", data)
    }

    /* HTTP Request to add a friend - D.D. */
    addFriend(data){
        return http.put("/accounts/add-friend", data)
    }
}
export default new AccountDataService();