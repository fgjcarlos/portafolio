import { NavHashLink } from 'react-router-hash-link';
import './linkfgjcarlos.css';

const Linkfgjcarlos = ({customStyle}) => {

    const colorActive = '#ff7f2f';


    return (

        <div className={'linkHome ' + customStyle}>


<NavHashLink to='/#landing'
        activeClassName={'linkHome ' + customStyle}
        smooth
        activeStyle={
            {color: colorActive}
    }>
        FGJCARLOS</NavHashLink>

        </div>


        // <NavLink to="/">
        //     <div className={'linkHome ' + customStyle}>FGJCARLOS</div>
        // </NavLink>
    );
}


export default Linkfgjcarlos;
