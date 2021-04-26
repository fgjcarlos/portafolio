import './card.css';

const Card = ({cardImg, cardBody, cardLinks}) => {
    return(
        <div className="card-container">
            <div id="card-img">
                <img src={cardImg.src} alt={cardImg.alt} />
            </div>
            <div id="card-body">
                <h5>{cardBody.title}</h5>
                <p>{cardBody.description}</p>
            </div>
            <div id="card-links">
                <div id="c-link-git">
                {cardLinks.git && <img src={cardLinks.src} alt={cardLinks.alt}/>}
                </div>
                <div id="c-link-live">
                {cardLinks.play && <img src={cardLinks.src} alt={cardLinks.alt}/>}
                </div>
            </div>
        </div>
    );
}


export default Card;