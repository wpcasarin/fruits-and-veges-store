import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();
const url = 'https://www.fruityvice.com/api/fruit/all';

export const GlobalProvider = ({ children }) => {
  // States
  const [totalItems, setTotalItems] = useState(0);
  const [itemsData, setItemsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Functions

  const addTotalItems = () => {
    setTotalItems(totalItems + 1);
  };

  const rmTotalItems = () => {
    setTotalItems(totalItems - 1);
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

  const fetchData = async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    setItemsData(data);
  };

  // Use Effect
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        totalItems,
        itemsData,
        cartItems,
        addTotalItems,
        rmTotalItems,
        addItemToCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
