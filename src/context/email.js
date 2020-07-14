import React, { createContext, useMemo, useState } from 'react';

export const EmailContext = createContext({});

export default function EmailContextProvider({ children }) {

    const [email, setEmail] = useState({});

    const providerValue = useMemo(() => ({ email, setEmail }), [email, setEmail])

    return(
        <EmailContext.Provider value={providerValue}>
            {children}
        </EmailContext.Provider>
    )
}