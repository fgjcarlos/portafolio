import { useMediaQuery } from 'react-responsive';
import { MenuBarDesktop, MenuBarDevice } from '../MenuBar/MenuBar';
import './header.css';

const Header = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 768px)'
      })

    return (
        <div className="h-container">
            <div>
                <div id="h-home" className="h-link">FGJCARLOS</div>
            </div>

          {isDesktopOrLaptop ?  <MenuBarDesktop linksDevide={isDesktopOrLaptop} /> : <MenuBarDevice />}

        </div>
    );
}

export default Header;
 