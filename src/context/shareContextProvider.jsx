import ShareContext from "./shareContext";
import { useState } from "react";

export const ShareContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ShareContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </ShareContext.Provider>
    </>
  );
};
