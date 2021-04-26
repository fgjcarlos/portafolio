import {useSelector} from "react-redux";
import {Route, Switch} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Landing from "./Pages/Landing/Landing";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {

    const isLandingPage = useSelector(s => s.header);
    const showFooter = (isLandingPage === '') ? true : false;

    return (


        <div className={
            "App " + (
            isLandingPage ? 'notFooter' : ''
        )
        }>

            <Header/>

            <Switch>
                <Route path="/" exact>
                    <Landing/>
                </Route>

                <Route path="/about" exact>
                    <About/>
                </Route>

                <Route path="/portfolio" exact>
                    <Portfolio/>
                </Route>

            </Switch>

            {
            showFooter && <Footer/>
        } </div>
    );
}

export default App;
