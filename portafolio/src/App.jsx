import {Route, Switch} from "react-router-dom";
import 'App.css';
import Root from "Pages/Root/Root";
import Credits from "Pages/Credits/Credits";
import {ThemeContextProvider} from "context/themeContext";
import Header from 'components/Header/Header';
import LazyFooter from 'components/Footer/LazyFooter';

function App() {

    return (

        <div className={'App'}>
            <ThemeContextProvider>

                <Header/>

                <Switch>
                    
                    <Route path="/" exact>
                        <Root/>
                    </Route>

                    <Route path="/credits" exact>
                        <Credits/>
                    </Route>
                    
                </Switch>
                
                <LazyFooter/>

            </ThemeContextProvider>

        </div>
    );
}

export default App;
