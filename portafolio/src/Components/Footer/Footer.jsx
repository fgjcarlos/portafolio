import './footer.css';
import {iconLinkedin, iconGitHub, iconGitLab} from '../../container/iconsExport';
import MenuLinks from '../MenuLinks/MenuLinks';
import Linkfgjcarlos from '../Linkfgjcarlos/Linkfgjcarlos';


const Footer = () => {

    const listIRRSS = [iconLinkedin, iconGitHub, iconGitLab];

    return (
        <div className="f-container">
            <div className="f-links">

                <Linkfgjcarlos customStyle={'footer-link'}/>

                <MenuLinks/>

                <div className="f-linksContainers">
                    {
                    listIRRSS.map(rrss => <div id="f-rrss"     key={
                        rrss.alt
                    }>

                        <img src={
                                rrss.icon
                            }
                            alt={
                                rrss.alt
                            }
                        />

                    </div>)
                } </div>


            </div>
            <div className="f-nameDescription">

                <span>Carlos Fontán - Desarrollador web</span>
                <span id="f-credit">© Creditos de la web</span>

            </div>
        </div>
    );
}


export default Footer;
