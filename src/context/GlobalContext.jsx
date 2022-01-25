import { createContext, useState, useEffect } from 'react';
import backup from '../data/backupData';
const GlobalContext = createContext();
const url = 'https://www.fruityvice.com/api/fruit/all';

export const GlobalProvider = ({ children }) => {
  // States
  const [totalItems, setTotalItems] = useState(0);
  const [itemsData, setItemsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [fetchSuccess, setFetchSuccess] = useState(true);

  // Functions
  const haveItem = (id) => {
    const item = itemsData.filter((item) => item.id === id);
    if (cartItems.includes(...item)) {
      return true;
    } else {
      return false;
    }
  };

  const updateTotalItems = () => {
    const sum = cartItems.length;
    setTotalItems(sum);
  };

  const updateTotalQuantity = () => {
    const sum = cartItems.reduce((prev, curr) => prev + curr.count, 0);
    setTotalQuantity(sum);
  };

  const itemQuantity = (id) => {
    const newItem = itemsData.filter((item) => item.id === id);
    return newItem[0].count;
  };

  const addItemToCart = (id) => {
    const newItem = itemsData.filter((item) => item.id === id);
    if (!cartItems.includes(...newItem)) {
      newItem[0].count = 1;
      setCartItems([...cartItems, ...newItem]);
    } else {
      newItem[0].count++;
    }
    updateTotalQuantity();
  };

  const rmItemFromCart = (id) => {
    const newItem = itemsData.filter((item) => item.id === id);

    if (cartItems.includes(...newItem) && newItem[0].count > 1) {
      newItem[0].count--;
    } else if (newItem[0].count === 1) {
      deleteItemFromCart(id);
    }
    updateTotalQuantity();
  };

  const deleteItemFromCart = (id) => {
    const toDelete = itemsData.filter((item) => item.id === id);
    const newArr = cartItems.filter((item) => item.id !== toDelete[0].id);
    setCartItems(newArr);
    updateTotalQuantity();
  };

  const clearCart = () => {
    setCartItems([]);
    updateTotalQuantity();
  };
  // API don't allow CORS using a backup data to keep things working
  const fetchData = async () => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      setItemsData(data);
    } catch (err) {
      setFetchSuccess(false);
      setItemsData(backup);
    }
  };

  // Use Effect
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateTotalItems();
    updateTotalQuantity();
  }, [cartItems]);

  return (
    <GlobalContext.Provider
      value={{
        totalItems,
        totalQuantity,
        itemsData,
        cartItems,
        fetchSuccess,
        addItemToCart,
        rmItemFromCart,
        deleteItemFromCart,
        itemQuantity,
        clearCart,
        updateTotalQuantity,
        haveItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
