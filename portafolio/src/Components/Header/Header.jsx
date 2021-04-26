import {useMediaQuery} from 'react-responsive';
import {MenuBarDesktop, MenuBarDevice} from '../MenuBar/MenuBar';
import Linkfgjcarlos from '../Linkfgjcarlos/Linkfgjcarlos';
import { useSelector} from 'react-redux';
import './header.css';

const Header = () => {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 768px)'});
    const isTypeHeader = useSelector(s => s.header);

    return (
        <div className={"h-container " + isTypeHeader}>

            <Linkfgjcarlos customStyle={''}/>

            {isDesktopOrLaptop ? <MenuBarDesktop/> : <MenuBarDevice />} 
        </div>
    );
}

export default Header;
