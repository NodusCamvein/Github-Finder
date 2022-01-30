import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import React from 'react';
import User from './components/users/User';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Route>
                <Route path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Route>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
