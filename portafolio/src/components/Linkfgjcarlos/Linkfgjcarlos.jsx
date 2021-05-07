// import {NavHashLink} from 'react-router-hash-link';
import './linkfgjcarlos.css';

const Linkfgjcarlos = ({customStyle}) => {

    return (

        <div className={
            'linkHome ' + customStyle
        }>
            <a href='#landing'
                // activeClassName={
                //     'linkHome ' + customStyle
                // }
                // smooth
                >
                FGJCARLOS</a>
        </div>
    );
}

export default Linkfgjcarlos;