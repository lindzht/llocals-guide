import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';


import NewRecForm from './NewRecForm.js';
import RecCards from './RecCards.js';
import RecList from './RecList.js';
import Search from './Search.js';

function App() {
  return (
    <div>
      
      <Header /> 
      
      <Switch>



      
        <About />
        <Home />

      </Switch>

    </div>
  );
}

export default App;
