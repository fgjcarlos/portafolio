import {NavHashLink} from 'react-router-hash-link';
import './linkfgjcarlos.css';

const Linkfgjcarlos = ({customStyle}) => {

    return (

        <div className={
            'linkHome ' + customStyle
        }>

            <NavHashLink to='/#landing'
                activeClassName={
                    'linkHome ' + customStyle
                }
                smooth>
                FGJCARLOS</NavHashLink>

        </div>
    );
}


export default Linkfgjcarlos;
