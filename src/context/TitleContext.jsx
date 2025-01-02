// libraries
import React, { createContext, useEffect, useState } from "react";

//create the context
export const TitleContext = createContext();

// create the provider
export default function TitleProvider({ children }) {
  const [title, setTitle] = useState("Home");

  /* 
    set the title when changes
    component did update
  */
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}
