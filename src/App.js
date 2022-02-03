import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GitHubState';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import React from 'react';
import User from './components/users/User';

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
                <Route component={NotFound} />
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path={`/user/:login`} component={User} />
              </Route>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
