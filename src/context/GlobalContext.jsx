import { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);
  return (
    <GlobalContext.Provider value={{ setTotalItems }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
