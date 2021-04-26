import {useState} from 'react';
import {useSelector} from 'react-redux';
import './menuBar.css';
import MenuLinks from '../MenuLinks/MenuLinks';

export const MenuBarDesktop = ({linkActive}) => {

    const isLandingPage = useSelector(s => s.header);

    const setBackgroudLinks = (isLandingPage === 'h-landing' ? 'links-land' : '')

    return (<div className={
        'h-links ' + setBackgroudLinks
    }>

        <MenuLinks linkActive={linkActive}/>

    </div>);
}

export const MenuBarDevice = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenuHam = () => {
        setShowMenu(!showMenu);
    }

    return (<div className="h-menuDevice">
         {/* icon menu hamburguer */}
        <div id="btnHam"
            onClick={handleShowMenuHam}></div>
        {
        showMenu && <MenuBarDesktop linkActive={handleShowMenuHam}/>
    } </div>);


}
