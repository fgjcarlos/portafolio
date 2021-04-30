import {useSelector} from "react-redux";
import {Route, Switch} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Landing from "./Pages/Landing/Landing";
import Portfolio from "./Pages/Portfolio/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from "./Pages/Contact/Contact";
import Root from "./Pages/Root/Root";

function App() {

    // const isLandingPage = useSelector(s => s.header);
    // const showFooter = (isLandingPage === '') ? true : false;

    return (


        <div className={'App'
            // "App " + (
            // isLandingPage ? 'notFooter' : ''
        // )
        }   
        >
            <Switch>
                <Route path="/" exact>
                    <Root/>
                </Route>
            </Switch>

            {
            // showFooter && <Footer/>
        } </div>
    );
}

export default App;
