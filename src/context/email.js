import React, { createContext } from 'react';

export const emailContext = createContext({});

export default function EmailContextProvider({ children, value }) {
    return(
    <emailContext.Provider value={value}>
        {children}
    </emailContext.Provider>
    )
}