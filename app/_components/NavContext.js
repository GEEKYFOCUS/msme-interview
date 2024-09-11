"use client";

import { createContext, useContext, useState } from "react";

const NavBarContext = createContext();

function NavBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <NavBarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        close,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
}

function useNavBar() {
  const context = useContext(NavBarContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  console.log(context);
  return context;
}

export { NavBarProvider, useNavBar };
