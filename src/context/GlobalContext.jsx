import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();
const url = 'https://www.fruityvice.com/api/fruit/all';

export const GlobalProvider = ({ children }) => {
  // States
  const [totalItems, setTotalItems] = useState(0);
  const [itemsData, setItemsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Functions
  const updateTotalItems = () => {
    const sum = cartItems.length;
    setTotalItems(sum);
  };

  const addItemToCart = (id) => {
    const newItem = itemsData.filter((item) => item.id === id);
    if (!cartItems.includes(...newItem)) {
      newItem[0].count = 1;
      setCartItems([...cartItems, ...newItem]);
    } else {
      newItem[0].count++;
    }
  };

  const rmItemFromCart = (id) => {
    const newItem = itemsData.filter((item) => item.id === id);

    if (cartItems.includes(...newItem) && newItem[0].count > 0) {
      newItem[0].count--;
    } else if (newItem[0].count === 0) {
      const newArr = cartItems.filter((item) => item.count !== 0);
      setCartItems(newArr);
    }
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
  }, [cartItems]);

  return (
    <GlobalContext.Provider
      value={{
        totalItems,
        itemsData,
        cartItems,
        addItemToCart,
        rmItemFromCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
