import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
// import '../App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import RecList from './RecList';

function App() {

  const [allRecs, setAllRecs] = useState([])

  function addNewRec (someNewRecObj) {
    fetch (`http://localhost:3000/recommendations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(someNewRecObj)
    })
    .then (response => response.json())
    .then (newRecData => setAllRecs([...allRecs, newRecData]))
  }

  useEffect (() => {
    fetch (`http://localhost:3000/recommendations`)
     .then (response => response.json ())
     .then (recData => setAllRecs(recData))
  }, [])
  
  return (
    <div> 
      <NavBar />
      <Switch>
        <Route path="/recommendations">
          <RecList allRecs={allRecs} addNewRec={addNewRec}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />   
        </Route>
      </Switch>
    </div>
  );
}

export default App;
