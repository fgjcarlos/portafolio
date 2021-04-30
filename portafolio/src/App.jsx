import {Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Root from "./Pages/Root/Root";

function App() {

    return (

        <div className={'App'} >
            <Switch>
                <Route path="/" exact>
                    <Root/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
