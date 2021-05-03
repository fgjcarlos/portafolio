import {Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Root from "./Pages/Root/Root";
import { HeaderContextProvider } from "./context/headerContext";

function App() {

    return (

        <div className={'App'} >
            <HeaderContextProvider>
        
            <Switch>
                <Route path="/" exact>
                    <Root/>
                </Route>
            </Switch>
            </HeaderContextProvider>

        </div>
    );
}

export default App;
