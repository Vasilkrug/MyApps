import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiGuardian from "./Pages/ApiGuardian/ApiGuardian";
import TaskManager from "./Pages/TaskManager/TaskManager"
import Menu from "./Components/Menu/Menu";
import style from "./App.module.scss";
import './App.css';





function App() {
   
    return (

        
       <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/guardian" component={ApiGuardian} />
                    <Route exact path="/tasklist" component={TaskManager} />

                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
