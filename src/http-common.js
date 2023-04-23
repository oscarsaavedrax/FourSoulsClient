/* Developer: Daniel De Guzman */
/* http-common.js - handles baseURL and headers for HTTP Requests. */

import axios from "axios";

/* baseURL for api will be http://localhost:3000/api/v1 - D.D. */
export default axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
