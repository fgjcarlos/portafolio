import {createContext, useState} from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({children}) => {

    const [store, setStore] = useState({headerBackColor: false, linkActive: undefined});

    return (<ThemeContext.Provider value={
        {store, setStore}
    }> {children} </ThemeContext.Provider>);
}

export default ThemeContext;