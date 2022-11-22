import React, {useState, useEffect} from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import RecList from './RecList';
import NewRecForm from './NewRecForm';

function App () {
  
  const [allRecs, setAllRecs] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('All');

  const history = useHistory();

  function addNewRec (someNewRecObj) {
    fetch (`https://llocals-only-recommendations.onrender.com/recommendations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(someNewRecObj)
    })
    .then (response => response.json())
    .then (newRecData => {
      setAllRecs([...allRecs, newRecData]);
      history.push("/recommendations");
    })
  }

  useEffect (() => {
    fetch (`https://llocals-only-recommendations.onrender.com/recommendations`)
     .then (response => response.json ())
     .then (recData => setAllRecs(recData))
  }, [])

  const searchedArray = allRecs
  .filter((rec) => {
    return (
    rec.name.toLowerCase().includes(searchValue.toLowerCase()) || 
    rec.description.toLowerCase().includes(searchValue.toLowerCase()) || 
    rec.borough.toLowerCase().includes(searchValue.toLowerCase()) || 
    rec.category.toLowerCase().includes(searchValue.toLowerCase()) || 
    rec.area.toLowerCase().includes(searchValue.toLowerCase()) || 
    rec.user.toLowerCase().includes(searchValue.toLowerCase())
    )
  })
  .filter((rec) => {
      if (selectedCategory === 'All' || selectedCategory === rec.category)
      return true
  })
  .sort ((a,b) => {
    const catA =  a.name
    const catB = b.name 
    if (catA < catB) {
      return -1;
    }
    if (catA > catB) {
      return 1;
    }
      return 0;
  })

  return (
    <div> 
      <NavBar />
      <Switch>
        <Route path="/recommendations">
          <RecList 
            allRecs={searchedArray} 
            allRecCategories={allRecs}
            addNewRec={addNewRec} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Route>
        <Route path="/about">
          <About setSelectedCategory={setSelectedCategory} />
        </Route>
        <Route path="/new">
          <NewRecForm addNewRec={addNewRec} setSelectedCategory={setSelectedCategory} /> 
        </Route>
        <Route exact path="/">
          <Home allRecs={allRecs} setSelectedCategory={setSelectedCategory} />   
        </Route>
      </Switch>
    </div>
  );
}

export default App;