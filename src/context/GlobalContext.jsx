import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();
const url = 'https://www.fruityvice.com/api/fruit/all';

export const GlobalProvider = ({ children }) => {
  // States
  const [totalItems, setTotalItems] = useState(0);
  const [itemsData, setItemsData] = useState([]);

  // Functions
  const updateTotalItems = () => {
    setTotalItems(totalItems + 1);
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
    <GlobalContext.Provider value={{ totalItems, updateTotalItems, itemsData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
