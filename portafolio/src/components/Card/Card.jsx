import './card.css';
import {iconGitHub} from 'container/iconsExport';
import {iconDemoLive} from 'container/iconsExport';

const Card = ({proyect}) => {

    const {image,title,techs,description,linkGit,linkDemo,id} = proyect;

    // Load img proyect
    const urlImage = require(`../../Media/photos/${image}`).default;

    return (
        <div className="card-container">

            <div id="card-img">
                <img src={urlImage} alt={id}/>
            </div>

            <h5>{title}</h5>

            <div className="card-techs">
            {
                techs.map(tech => 
                    <span key={tech}>
                        {`#${tech}`}
                    </span>)
            } </div>

            <p>{description}</p>

            <div id="card-links">

                {
                linkGit && 
                
                <a href={linkGit} target='_blank' rel="noreferrer">
                    <img src={iconGitHub.icon}
                         alt={iconGitHub.alt}
                         title={iconGitHub.alt} /> 
                </a>
                
                }
                {
                linkDemo && 
                <a href={linkDemo} target='_blank' rel="noreferrer">
                    <img src={iconDemoLive.icon}
                         alt={iconDemoLive.alt}
                         title={iconDemoLive.alt}/>
                </a>

            } </div>
        </div>
    );
}

export default Card;