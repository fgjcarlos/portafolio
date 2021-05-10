import { useRef} from 'react';
import './menuBar.css';
import MenuLinks from 'components/MenuLinks/MenuLinks';
import {useStateMenuDevice} from 'hooks/useStateMenuDevice';

export const MenuBarDesktop = () => {

    return (
        <div className={'h-links'}>
            <MenuLinks/>

        </div>
    );
}

export const MenuBarDevice = () => {

    // Ref for hide menu if clicked outside
    const wrapperRef = useRef(null);
    const [showMenu, setShowMenu] = useStateMenuDevice(wrapperRef);

    const handleShowMenuHam = () => {
        setShowMenu(!showMenu);        
    }

    return (
        <div className="h-menuDevice" ref={wrapperRef}>
            {/* icon menu hamburguer */}
            <div id="btnHam"
                onClick={handleShowMenuHam}></div>
            {
            showMenu && <div >
                <MenuBarDesktop/>
            </div>
        } </div>
    );
}