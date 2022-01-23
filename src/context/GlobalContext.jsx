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
    setCartItems([...cartItems, itemsData.filter((item) => item.id === id)]);
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
