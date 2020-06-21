import React from 'react';
import './App.css';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Client from './Client';
import Tmwdata from './Tmwdata'


function App() {
  return (
    <div className="App">
      <Header />
      <Client />
      <Tmwdata />
    </div>
  );
}

export default App;
