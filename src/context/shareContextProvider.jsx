import ShareContext from "./shareContext";
import { useState } from "react";

export const ShareContextProvider = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <ShareContext.Provider value={{ activeDropdown, setActiveDropdown }}>
        {children}
      </ShareContext.Provider>
    </>
  );
};
