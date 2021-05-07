import './linkfgjcarlos.css';

const Linkfgjcarlos = ({customStyle}) => {

    return (
        <div className={
            'linkHome ' + customStyle
        }>
            <a href='#landing'>
                FGJCARLOS
            </a>
        </div>
    );
}

export default Linkfgjcarlos;