import './menuLinks.css';
import nameLinks from 'container/listNameLinksMenu.json';
import { useContext } from 'react';
import ThemeContext from 'context/themeContext';

const MenuLinks = () => {

    const {setStore} = useContext(ThemeContext);

    const handleActiveLink = (item) => {
        setStore({linkActive: item})
    }

    return (

        <> {
            nameLinks.map(({text, path, id}) => <div className="h-link"
                key={id}>
                <a href={path} onClick={() =>handleActiveLink(id)}>
                    {text}
                </a>
            </div>)
        } </>
    );

}

export default MenuLinks;