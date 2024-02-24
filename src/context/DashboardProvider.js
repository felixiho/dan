import { createContext, useContext, useState } from "react";
 
const LayoutContext = createContext(undefined);

function LayoutProvider({ children }) {
  const [user, setUser] = useState();

  const value = { user, setUser };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}

function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a Layout provider");
  }
  return context;
}

export { LayoutProvider, useLayout };
