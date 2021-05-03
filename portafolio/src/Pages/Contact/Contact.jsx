import ListSocialMedia from '../../components/ListSocialMedia/ListSocialMedia';
import './contact.css';

const Contact = () => {

    return (
        <div className="contact-container">
                <h2>Contacto</h2>
                <p>Si quieres charlar sobre desarrollo web, sobre alguna afición que tengamos 
                                        en común, darme un feedback o cualquier consulta de alguno de mis 
                                        proyectos, o mejor aún, si crees que mi perfil profesional encaja con lo 
                                        que buscas, ¡no dudes en contactar conmigo!</p>


                    <ListSocialMedia/>
        </div>
    );

}

export default Contact;
