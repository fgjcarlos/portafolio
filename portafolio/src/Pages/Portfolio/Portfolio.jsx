import './portfolio.css';
import imgPortfolio from "../../Media/photos/porfolioFGJCARLOS.jpg";
import Card from '../../Components/Card/Card';
import {iconGitHub} from '../../services/iconsExport';
import {useDispatch} from 'react-redux';

const Portfolio = () => { // set type page, for header and footer
    const dispatch = useDispatch();
    dispatch({type: 'common'});


    // Move to cardProgects
    const logoCard = {
        src: imgPortfolio,
        alt: 'fgjcarlos-logo'
    }


    const bodyCard = {
        title: 'Portafolio',
        description: 'Web personal, creada con React, donde mostraré proyectos personales y un blog con mis aficiones'
    }


    const linksCard = {
        src: iconGitHub.icon,
        git: iconGitHub.alt,
        play: null
    }

    return (<div className="p-container">

        <div className="ab-jumbotron">
            <Card cardImg={logoCard}
                cardBody={bodyCard}
                cardLinks={linksCard}/>
        </div>

    </div>);
}


export default Portfolio;
