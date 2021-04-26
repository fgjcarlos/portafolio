import { NavLink } from 'react-router-dom';
import './menuLinks.css';

const MenuLinks = ({linkActive}) => {

    const nameLinks = [
        {
            id: 1,
            text: 'Sobre mí',
            path: '/about'
        }, {
            id: 2,
            text: 'Portafolio',
            path: '/portfolio'
        }, {
            id: 3,
            text: 'Blog',
            path: '/blog'
        }, {
            id: 4,
            text: 'Contacto',
            path: '/contact'
        }
    ];

    return(
        <>
{        nameLinks.map(({text, path, id}) => <div className="h-link"
            key={id}>
            <NavLink onClick={linkActive}
                to={
                    path
            }> {
                text
            } </NavLink>
        </div>)}
        </>
    );

}

export default MenuLinks;