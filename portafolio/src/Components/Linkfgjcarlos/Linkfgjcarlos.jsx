import {NavLink} from 'react-router-dom';
import './linkfgjcarlos.css';

const Linkfgjcarlos = ({customStyle}) => {

    return (
        <NavLink to="/">
            <div className={'linkHome ' + customStyle}>FGJCARLOS</div>
        </NavLink>
    );
}


export default Linkfgjcarlos;
