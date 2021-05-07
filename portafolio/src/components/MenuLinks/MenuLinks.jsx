// import {NavHashLink} from 'react-router-hash-link';
import './menuLinks.css';
import nameLinks from 'container/listNameLinksMenu.json';
import { useContext } from 'react';
import ThemeContext from 'context/themeContext';

const MenuLinks = () => {

    // const colorActive = '#ff7f2f';
    const {setStore} = useContext(ThemeContext);


    const handleActiveLink = (item) => {
        setStore({linkActive: item})
    }

    return (

        <> {
            nameLinks.map(({text, path, id}) => <div className="h-link"
                key={id}>
                <a href={path}
                onClick={() =>handleActiveLink(id)}
                //     activeClassName="selected"
                //     smooth
                //     activeStyle={
                //         {color: colorActive}
                // }
                >
                    {text}</a>
            </div>)
        } </>
    );

}

export default MenuLinks;