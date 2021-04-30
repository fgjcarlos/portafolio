import './portfolio.css';
import Card from '../../Components/Card/Card';
import {useDispatch} from 'react-redux';
import listProyects from '../../container/listProyects.json';

const Portfolio = () => { // set type page, for header and footer
    const dispatch = useDispatch();
    dispatch({type: 'common'});


    return (
        <div className="p-container">

            <div className="p-jumbotron">
                <h1>Proyectos personales</h1>
                <div className="p-proyects"> {
                    listProyects.map((proyect) => <Card key={proyect.id} proyect={proyect}/>)
                } </div>
            </div>

        </div>
    );
}


export default Portfolio;
