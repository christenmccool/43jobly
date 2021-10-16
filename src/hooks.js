import React, {useState, useEffect} from 'react';

/** Custom hook to use localStorage with React state
 * obtain initial value for state from local storage
 * update locatStorage whenever state updates 
 **/

const useLocalStorage = (key, defaultVal) => {
  const initialVal = JSON.parse(localStorage.getItem(key)) || defaultVal;

  const [data, setData] = useState(initialVal);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data) || defaultVal);
  }, [key, data]);

  return [data, setData];
}

export {useLocalStorage};