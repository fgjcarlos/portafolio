import {useMediaQuery} from 'react-responsive';
import {MenuBarDesktop, MenuBarDevice} from '../MenuBar/MenuBar';
import Linkfgjcarlos from '../Linkfgjcarlos/Linkfgjcarlos';
import './header.css';

const Header = ({landingStyle}) => {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 768px)'});

    return (
        <div className={"h-container " + landingStyle}>

            <Linkfgjcarlos customStyle={''}/>

            {isDesktopOrLaptop ? <MenuBarDesktop/> : <MenuBarDevice />} 
        </div>
    );
}

export default Header;
