import {useRef, useState} from 'react';
import './menuBar.css';
import MenuLinks from '../MenuLinks/MenuLinks';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

export const MenuBarDesktop = ({linkActive}) => {

    return (<div className={
        'h-links' 
    }>
        <MenuLinks linkActive={linkActive}/>

    </div>);
}

export const MenuBarDevice = () => {

    const [showMenu, setShowMenu] = useState(false);

    // Ref for hide menu if clicked outside
    const wrapperRef = useRef(null);
    const {isClicked} =  useOutsideAlerter(wrapperRef);

    const handleShowMenuHam = () => {
        setShowMenu(!showMenu);
    }

    // Hide menu
    isClicked && showMenu && handleShowMenuHam();

    return (<div className="h-menuDevice"> {/* icon menu hamburguer */}
        <div id="btnHam"
            onClick={handleShowMenuHam}></div>
        {
        showMenu && <div ref={wrapperRef}>
            <MenuBarDesktop linkActive={handleShowMenuHam}/>
        </div>
    } </div>);


}
