import {useMediaQuery} from 'react-responsive';
import {MenuBarDesktop, MenuBarDevice} from 'components/MenuBar/MenuBar';
import Linkfgjcarlos from 'components/Linkfgjcarlos/Linkfgjcarlos';
import './header.css';
import { useContext } from 'react';
import ThemeContext from 'context/themeContext';

const Header = () => {

    const {store} = useContext(ThemeContext);
    const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 768px)'});
    const darkHeader = store.headerBackColor ? 'h-DarkColorHeader' : '';

    const landinHeader = (store && store.isLandinInView) ? 'h-landing' : '';

    return (
        <div className={`h-container ${landinHeader} ${darkHeader}`}>

            <Linkfgjcarlos customStyle={''}/>

            {isDesktopOrLaptop ? <MenuBarDesktop/> : <MenuBarDevice />} 
        </div>
        
    );
}

export default Header;