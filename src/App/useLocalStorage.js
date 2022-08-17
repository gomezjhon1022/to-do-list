import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const [syncronizedItem, setSyncronizeditem] = React.useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
          setSyncronizeditem(true);
        } catch (error) {
          setError(error);
        }
      }, 3000)
      },[syncronizedItem]);
    const saveItem = (newItem) => {
      try {
        const stringifyedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifyedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
    const syncronize = () => {
      setLoading(true);
      setSyncronizeditem(false);
    }
    return {
      item,
      saveItem,
      loading,
      error,
      syncronize
    };
  }

  export {useLocalStorage};