import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import Employees from './Employees';

import './App.css';

class App extends Component{
  render(){
    console.log("host url"+process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">  
          <img src={logo} className="App-logo" alt="logo" />       
          <h1 className="App-title">React-App to display employee details</h1>
        </header>       

        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/employeeList"></Redirect>
          )}>
          </Route>

          <Route exact path="/employeeList" component={Employees}></Route>

        </Switch>  
      </div>
      </Router>        
    
    );    
  }
}

export default App;
