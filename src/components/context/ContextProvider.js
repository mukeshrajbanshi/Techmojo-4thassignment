import React, { createContext, useState } from 'react'

export const DeleteContext = createContext("");

const ContextProvider = ({children}) => {
    
    const [dlttask, setDletask] = useState(false);

  return (
    <>
    <DeleteContext.Provider value = {{dlttask, setDletask}}>
        {children}
    </DeleteContext.Provider>
    </>
  )
}

export default ContextProvider