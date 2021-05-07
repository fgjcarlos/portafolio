import './about.css';
import ListIconSkills from 'components/ListIconSkills/ListIconSkills';

const About = ({aboutLoad}) => {

    return (
        <div className="ab-container" onLoad={aboutLoad} >

            <h2 className="ab-common">Sobre mí</h2>

            <div className="ab-avatar ab-common"/>

            <p className="ab-common">
                El mundo tecnológico siempre me ha apasionado desde pequeño. Desde la electrónica hasta la parte que más me gusta que es la programación.
                <br/>
                <br/>
                Entre mis aficiones se encuentran, el ‘cacharreo’ con placas electrónicas tipo Arduino y Raspberry Pi, la impresión 3d y el deporte. Desde hace unos años, después de ‘abandonar’ el fútbol, me he enganchado al atletismo de montaña. Me aporta diversión, contacto con la naturaleza y aumenta la capacidad de sufrimiento xD, que en cada carrera de media-larga distancia se pasan por una montaña rusa de estados físicos y anímicos, pero con constancia y las ganas de seguir se superan, hasta conseguir el objetivo de finalizar y superar el reto que cada prueba te propone.<br/>
                <br/>
                En los últimos años he trabajado como robótico industrial, programando robots y cobots, sobre todo en automoción y bajo el estándar VASS (Grupo Volkswagen). Gracias a que la programación de uno de los cobots (Iiwa Lbr, Kuka) que se realizaba en Java, volvió a despertar en mí, la necesidad de estar más cerca del código, que de la configuración de los dispositivos que lo implementan.<br/>
                <br/>
                Con la incertidumbre del 2020, aproveché para dar el paso hacia el desarrollo web, a través del Bootcamp de Hack a Boss, donde aprendí las bases de la programación web. 
                                                            En este curso he aprendido ha realizar un proyecto desde cero, desde la parte de back hasta la de front, destacando las tecnologías de HTML, CSS, JavaScript y React como framework para el frontend, NodeJs con Espress Js y Mysql para la parte del backend.<br/>
                <br/>
                Actualmente intento profundizar en los conocimientos adquiridos y poniéndolos en práctica con proyectos personales, hasta que me llegue una oportunidad para comenzar una carrera profesional en este sector.
                <br/>
            </p>
            <h3 className="ab-common">Skills</h3>
            <ListIconSkills/>
        </div>

    );

}

export default About;