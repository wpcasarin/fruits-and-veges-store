import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();
const url = 'https://www.fruityvice.com/api/fruit/all';

export const GlobalProvider = ({ children }) => {
  // States
  const [totalItems, setTotalItems] = useState(0);
  const [itemsData, setItemsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  // Functions
  const updateTotalItems = () => {
    const sum = cartItems.length;
    setTotalItems(sum);
  };

  const updateTotalQuantity = () => {
    const sum = cartItems.reduce((prev, curr) => prev + curr.count, 0);
    setTotalQuantity(sum);
  };

  //TODO needs state update
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
      const newArr = cartItems.filter((item) => item.count !== 1);
      setCartItems(newArr);
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

  const fetchData = async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    setItemsData(data);
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
        addItemToCart,
        rmItemFromCart,
        deleteItemFromCart,
        itemQuantity,
        clearCart,
        updateTotalQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
