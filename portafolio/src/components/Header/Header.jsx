import {useMediaQuery} from 'react-responsive';
import {MenuBarDesktop, MenuBarDevice} from 'components/MenuBar/MenuBar';
import Linkfgjcarlos from 'components/Linkfgjcarlos/Linkfgjcarlos';
import {useStateHeader} from 'hooks/useStateHeader';
import './header.css';

const Header = () => {

    const [darkHeader, landingHeader] = useStateHeader();
    const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 768px)'});

    return (
        <div className={`h-container ${landingHeader} ${darkHeader}`}>

            <Linkfgjcarlos customStyle={''}/>

            {isDesktopOrLaptop ? <MenuBarDesktop/> : <MenuBarDevice />} 
        </div>
        
    );
}

export default Header;