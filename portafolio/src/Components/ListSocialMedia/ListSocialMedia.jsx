import './listSocialMedia.css';
import {iconLinkedin, iconGitHub, iconEmail} from '../../container/iconsExport';

const ListSocialMedia = () => {

    const listIRRSS = [iconLinkedin, iconGitHub, iconEmail];

    return(
        <div className="list-rrss">
        { listIRRSS.map(({icon, alt, src}) => 
            <div id="f-rrss"  key={alt} >
                <a target="_blank" rel="noreferrer" href={src}>
                    <img src={icon} alt={alt} title={alt} />                
                </a>
            </div>
        )}
        </div>
    );

}

export default ListSocialMedia;