import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";

function App() {

  const isLandingPage = useSelector(s => s.header);
  const showFooter =  (isLandingPage === '') ? true : false;

  return (
    <div className="App">

      <Header />

      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

      </Switch>

     {showFooter && <Footer /> }

    </div>
  );
}

export default App;
