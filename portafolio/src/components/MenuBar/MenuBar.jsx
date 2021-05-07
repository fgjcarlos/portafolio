import {useContext, useEffect, useRef, useState} from 'react';
import './menuBar.css';
import MenuLinks from 'components/MenuLinks/MenuLinks';
import useOutsideAlerter from 'hooks/useOutsideAlerter';
import ThemeContext from 'context/themeContext';

export const MenuBarDesktop = () => {

    return (
        <div className={'h-links'}>
            <MenuLinks/>

        </div>
    );
}

export const MenuBarDevice = () => {

    const [showMenu, setShowMenu] = useState(false);
    const {store, setStore} = useContext(ThemeContext);

    // Ref for hide menu if clicked outside
    const wrapperRef = useRef(null);
    const {isClicked} = useOutsideAlerter(wrapperRef);

    useEffect(() => {
        setStore({headerBackColor: showMenu});
    }, [setStore, showMenu]);

    useEffect(() => {
        setShowMenu(false);
    }, [store.linkActive]);

    const handleShowMenuHam = () => {
        setShowMenu(!showMenu);
    }

    // Hide menu
    isClicked && showMenu && handleShowMenuHam();

    return (
        <div className="h-menuDevice">
            {/* icon menu hamburguer */}
            <div id="btnHam"
                onClick={handleShowMenuHam}></div>
            {
            showMenu && <div ref={wrapperRef}>
                <MenuBarDesktop/>
            </div>
        } </div>
    );
}
