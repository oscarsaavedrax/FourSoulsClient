// This is a custom hook to store information on the browser to prevent losing data on a reshresh
// Developer: Oscar Saavedra

/**************************************************************************
 *                  USING SESSION STORAGE FOR TESTING                     *
 *                  CHANGE TO LOCAL STORAGE FOR DEPLOYMENT                *
 **************************************************************************/
import { useEffect, useState } from "react";

// Use prefix to distinguish multiple sets of data on browser - O.S.
const PREFIX = "Four-Souls-Game-";

function useLocalStorage(key, initialValue) {
  // Create a name for data with prefix - O.S.
  const prefixedKey = PREFIX + key;

  // Get and set the value stored in localStorage - O.S.
  const [value, setValue] = useState(() => {
    const jsonValue = sessionStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // useEffect adds to the storage whenever there is a change
  useEffect(() => {
    sessionStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  // Return both values in order to be used as a useState - O.S.
  return [value, setValue];
}

export default useLocalStorage;
