import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';

function App (){

    return (
      <div className="App">
  
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pages/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
export default App;