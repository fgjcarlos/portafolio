import ListSocialMedia from '../../components/ListSocialMedia/ListSocialMedia';
import './contact.css';

const Contact = () => {

    return (
        <div className="contact-container">
            <h2>Contacto</h2>
            <p>Si tienes algún feedback o consulta sobre alguno de mis proyectos, o simplemente quieres charlar sobre desarrollo web o de alguna afición que tengamos en común, no dudes en contactar conmigo.
                Y mejor…, si crees que mi perfil profesional encaja con lo que buscas, estaré encantado de escucharte.</p>
            <ListSocialMedia/>
        </div>
    );

}

export default Contact;