import {Route, Switch} from "react-router-dom";
import 'App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Root from "Pages/Root/Root";
import { ThemeContextProvider } from "context/themeContext";

function App() {

    return (

        <div className={'App'} >
            <ThemeContextProvider>
            <Switch>
                <Route path="/" exact>
                    <Root/>
                </Route>
            </Switch>
            </ThemeContextProvider>

        </div>
    );
}

export default App;