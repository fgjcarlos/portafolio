import { useContext, useEffect, useState } from 'react';
import ThemeContext from 'context/themeContext';

export const useStateHeader = () => {
    const [landingHeader, setLandingHeader] = useState('');
    const [darkHeader, setDarkHeader] = useState('');

    const {store} = useContext(ThemeContext);

    useEffect(() => {
        const condLandingHeader =  store.isLandingInView ? 'h-landing' : '';
        const condDarkHeader =  store.headerBackColor ? 'h-DarkColorHeader' : '';
        setLandingHeader(condLandingHeader);
        setDarkHeader(condDarkHeader);
    },[store]);


    return [landingHeader, darkHeader];
}