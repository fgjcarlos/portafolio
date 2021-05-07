import {createContext, useState} from "react";

const LinkActive = createContext({});

export const LinkActiveProvider = ({children}) => {

    const [activeLink, setActiveLink] = useState('');

    return (<LinkActive.Provider value={
        {activeLink, setActiveLink}
    }> {children} </LinkActive.Provider>);
}

export default LinkActive;