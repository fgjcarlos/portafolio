import {useMediaQuery} from 'react-responsive';
import {NavLink} from 'react-router-dom';
import {MenuBarDesktop, MenuBarDevice} from '../MenuBar/MenuBar';
import { useSelector} from 'react-redux';
import './header.css';

const Header = () => {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 768px)'});
    const isTypeHeader = useSelector(s => s.header);

    return (
        <div className={"h-container " + isTypeHeader}>
            <div>
                <NavLink to="/">
                    <div id="h-home" className="h-link">FGJCARLOS</div>
                </NavLink>
            </div>

            {isDesktopOrLaptop ? <MenuBarDesktop/> : <MenuBarDevice />} 
        </div>
    );
}

export default Header;
