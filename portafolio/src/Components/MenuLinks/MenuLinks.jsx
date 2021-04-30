import {HashLink, NavHashLink} from 'react-router-hash-link';
import './menuLinks.css';

const MenuLinks = ({linkActive}) => {

    const colorActive = '#ff7f2f';

    const nameLinks = [
        {
            id: 1,
            text: 'Sobre mí',
            path: '#about'
        }, {
            id: 2,
            text: 'Portafolio',
            path: '#portfolio'
        }, {
            id: 3,
            text: 'Blog',
            path: '/#blog'
        }, {
            id: 4,
            text: 'Contacto',
            path: '/#contact'
        }
    ];

    return (
        <> {
            nameLinks.map(({text, path, id}) => <div className="h-link"
                key={id}>
                <NavHashLink to={path}
                    activeClassName="selected"
                    smooth
                    activeStyle={
                        {color: colorActive}
                }>
                    {text}</NavHashLink>
            </div>)
        } </>
    );

}

export default MenuLinks;
