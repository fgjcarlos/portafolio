import './footer.css';
import MenuLinks from 'components/MenuLinks/MenuLinks';
import Linkfgjcarlos from 'components//Linkfgjcarlos/Linkfgjcarlos';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="f-container">
            <div className="f-links">
                <Linkfgjcarlos customStyle={'footer-link'}/>
                <MenuLinks/>
            </div>
            <div className="f-nameDescription">

                <span>Carlos Fontán - Desarrollador web</span>
                <Link to="/credits" id="f-credit">© Creditos de la web</Link>

            </div>
        </div>
    );
}

export default Footer;