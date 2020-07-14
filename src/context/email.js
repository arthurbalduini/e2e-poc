import React, { createContext, useEffect, useMemo, useState } from 'react';

import { getEmailData } from '../service';

export const EmailContext = createContext({});

export default function EmailContextProvider({ children }) {

    const [email, setEmail] = useState({});

    useEffect(() => getEmailData(setEmail), []);

    const providerValue = useMemo(() => ({ email }), [email])

    return(
        <EmailContext.Provider value={providerValue}>
            {children}
        </EmailContext.Provider>
    )
}