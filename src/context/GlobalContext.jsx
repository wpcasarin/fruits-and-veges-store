import { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // States
  const [totalItems, setTotalItems] = useState(0);

  return (
    <GlobalContext.Provider value={{ totalItems }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
