import { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // States
  const [totalItems, setTotalItems] = useState(0);

  // Functions
  const updateTotalItems = () => {
    setTotalItems(totalItems + 1);
  };

  return (
    <GlobalContext.Provider value={{ totalItems, updateTotalItems }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
