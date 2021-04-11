import {useState} from 'react';
import './menuBar.css';

export const MenuBarDesktop = ({linksDevide}) => {

    const classMenuBar = linksDevide ? 'h-links' :`h-linkDevice`;

    return (
        <div className={classMenuBar}>
            <div className="h-link">Sobre mí</div>
            <div className="h-link">Portafolio</div>
            <div className="h-link">Blog</div>
            <div className="h-link">Contacto</div>
        </div>
    );
}

export const MenuBarDevice = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenuHam = () => {
        setShowMenu(!showMenu);
    }

    return (

        <div className="h-menuDevice">
            <div id="btnHam" onClick={handleShowMenuHam}></div>
            {showMenu && <MenuBarDesktop />}
        </div>

    );


}
