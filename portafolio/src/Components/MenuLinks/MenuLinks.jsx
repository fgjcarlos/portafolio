import { NavLink } from 'react-router-dom';
import './menuLinks.css';

const MenuLinks = ({linkActive}) => {

    const nameLinks = [
        {
            text: 'Sobre mí',
            path: '/about'
        }, {
            text: 'Portafolio',
            path: '/portfolio'
        }, {
            text: 'Blog',
            path: '/blog'
        }, {
            text: 'Contacto',
            path: '/contact'
        }
    ];

    return(
        <>
{        nameLinks.map(link => <div className="h-link"
            key={link}>
            <NavLink onClick={linkActive}
                to={
                    link.path
            }> {
                link.text
            } </NavLink>
        </div>)}
        </>
    );

}

export default MenuLinks;