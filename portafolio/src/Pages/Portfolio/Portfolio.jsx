import './portfolio.css';
import Card from 'components/Card/Card';
import listProyects from 'container/listProyects.json';

const Portfolio = () => {

    return (
        <div className="p-container">

            <h2>Proyectos personales</h2>
            <div className="p-proyects">
                {
                listProyects.map((proyect) => 
                <Card key={proyect.id} proyect={proyect}/>)
            } </div>

        </div>
    );
}

export default Portfolio;