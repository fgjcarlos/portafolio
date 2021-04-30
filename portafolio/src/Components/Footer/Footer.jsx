import './footer.css';
import MenuLinks from '../MenuLinks/MenuLinks';
import Linkfgjcarlos from '../Linkfgjcarlos/Linkfgjcarlos';

const Footer = () => {

    return (
        <div className="f-container">
            <div className="f-links">
                <Linkfgjcarlos customStyle={'footer-link'}/>
                <MenuLinks/>
            </div>
            <div className="f-nameDescription">

                <span>Carlos Fontán - Desarrollador web</span>
                <span id="f-credit">© Creditos de la web</span>

            </div>
        </div>
    );
}


export default Footer;
