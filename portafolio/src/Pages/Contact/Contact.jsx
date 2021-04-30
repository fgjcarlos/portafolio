import FormContact from '../../Components/FormContact/FormContact';
import ListSocialMedia from '../../Components/ListSocialMedia/ListSocialMedia';
import './contact.css';

const Contact = () => {

    return (
        <div className="contact-container">
            <div className="c-jumbotron">
                <h2>Contacto</h2>

                <div className="c-listContact">

                    <p>Si quieres charlar sobre desarrollo web, sobre alguna afición que tengamos 
                    en común, darme un feedback o cualquier consulta de alguno de mis 
                    proyectos, o mejor aún, si crees que mi perfil profesional encaja con lo 
                    que buscas, ¡no dudes en contactar conmigo!</p>
                    <div className="c-socialmedia">
                        <div className="c-form">
                            <h3>Formulario</h3>
                            <FormContact />                            
                        </div>
                        <div className="c-links">
                            <h3>Links</h3>
                            <ListSocialMedia />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );

}

export default Contact;