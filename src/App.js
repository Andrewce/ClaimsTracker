import React from 'react';
import './App.css';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Main from './Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { UserProvider } from './UserContext';
import ListClaims from './ListClaims';


function App() {



  return (
    <Router>
      <UserProvider>
        <Header />
        <div className="App">
          <Switch>

            <Route path="/" exact component={Login} />
            <Route path="/Main" exact component={Main} />
            <Route path="/ListClaims" exact component={ListClaims} />



          </Switch>
        </div>
      </UserProvider>

    </Router>
  );
}

export default App;
