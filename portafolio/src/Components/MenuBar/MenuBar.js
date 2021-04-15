import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector} from 'react-redux';
import './menuBar.css';

export const MenuBarDesktop = ({linkActive}) => {

    const nameLinks = [{text:'Sobre mí', path:'/about'},{text:'Portafolio', path:'/portfolio'},{text:'Blog', path:'/blog'}, {text:'Contacto', path:'/contact'}];
    const isTypeHeader = useSelector(s => s.header);

    const setBackgroudLinks =  (isTypeHeader === 'h-landing' ? 'links-land' : '')

    return (
        <div className={'h-links ' + setBackgroudLinks}>
            {
            nameLinks.map(link => 
                <div className="h-link" key={link}>
                    <NavLink onClick={linkActive} to={link.path}>
                      {link.text}
                    </NavLink>
                </div>)
            } 
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
            <div id="btnHam"
                onClick={handleShowMenuHam}></div>
            {
            showMenu && <MenuBarDesktop linkActive={handleShowMenuHam}/>
        } </div>

    );


}
