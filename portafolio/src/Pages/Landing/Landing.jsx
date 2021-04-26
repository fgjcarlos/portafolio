import './landing.css';
import Typed from 'react-typed';
import {useDispatch} from 'react-redux';

const Landing = () => {

    const dispatch = useDispatch();
    dispatch({type: 'landing'});

    return (
        <div className="lan-container">
            <div className="lan-msg lan-common">
                <Typed strings={
                        ['Hola, soy Carlos Fontán', 'Desarrollador web', '¡Bienvenid@!']
                    }
                    startDelay={300}
                    smartBackspace={true}
                    typeSpeed={70}/>
            </div>
        </div>
    );
}

export default Landing;
