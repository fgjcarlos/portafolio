import './credits.css';
import programerGif from '../../Media/photos/Developer_activity.gif';

const Credits = () => {
    return (

        <div className="credits-container section-common">
            <h2>Créditos del sito web</h2>
            <img src={programerGif}
                alt="programmer Gif"/>
            <h3>👨‍💻 Desarrollo Front-End y Back-End</h3>
            <ul>
                <li>Carlos Fontán</li>
            </ul>
            <h3>📦 Imágenes e iconos</h3>
            <ul>
                <li>
                    <p>
                        <span>Iconos </span>
                        obtenidos de &nbsp;
                        <a href="https://icon-icons.com/" target="_blank" rel="noreferrer">Icon-icons</a>
                    </p>
                </li>
                <li>
                    <p>
                    <span>Fondo principal</span>
                    &nbsp; imagen de &nbsp; 
                    <a href="https://pixabay.com/es/users/tookapic-1386459/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=932926" target="_blank" rel="noreferrer">tookapic</a>
                    &nbsp; en &nbsp; 
                    <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=932926" target="_blank" rel="noreferrer">Pixabay</a>
                    </p>
                </li>
                <li>
                    <span>Ilustración página créditos &nbsp;
                    </span>
                    <a href="https://storyset.com/web" target="_blank" rel="noreferrer">Illustration by Freepik Storyset</a>
                </li>
            </ul>
        </div>

    );
}

export default Credits;
