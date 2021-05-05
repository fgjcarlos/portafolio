import {useMediaQuery} from 'react-responsive';
import {MenuBarDesktop, MenuBarDevice} from 'components/MenuBar/MenuBar';
import Linkfgjcarlos from 'components/Linkfgjcarlos/Linkfgjcarlos';
import './header.css';
import { useContext } from 'react';
import HeaderContext from 'context/headerContext';

const Header = ({landingStyle}) => {

    const {headerBackColor} = useContext(HeaderContext);
    const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 768px)'});
    const darkHeader = headerBackColor ? 'h-DarkColorHeader' : '';

    return (
        <div className={`h-container ${landingStyle} ${darkHeader}`}>

            <Linkfgjcarlos customStyle={''}/>

            {isDesktopOrLaptop ? <MenuBarDesktop/> : <MenuBarDevice />} 
        </div>
        
    );
}

export default Header;