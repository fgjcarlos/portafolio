import {createContext, useState} from "react";

const HeaderContext = createContext({});

export const HeaderContextProvider = ({children}) => {

    const [headerBackColor, setHeaderBackColor] = useState(false);

    return (<HeaderContext.Provider value={
        {headerBackColor, setHeaderBackColor}
    }> {children} </HeaderContext.Provider>);
}

export default HeaderContext;
