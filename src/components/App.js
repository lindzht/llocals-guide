import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
// import '../App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import RecList from './RecList';

function App() {

  const [allRecs, setAllRecs] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('All')

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

  const searchedArray = allRecs
  .filter((rec) => {
    return (
    rec.name.toLowerCase().includes(searchValue.toLowerCase()) || 
    rec.description.toLowerCase().includes(searchValue.toLowerCase()) || 
    rec.borough.toLowerCase().includes(searchValue.toLowerCase()) || 
    rec.category.toLowerCase().includes(searchValue.toLowerCase()) || 
    rec.area.toLowerCase().includes(searchValue.toLowerCase())
    )
  })
  .filter((rec) => {
      if (selectedCategory === 'All' || selectedCategory === rec.category)
      return true
    })

  // const filteredRecsArray = allRecs.filter((rec) => {
  //   if (selectedCategory === 'All' || selectedCategory === rec.category)
  //   return true
  // })


  // function elevatorFunction (filterValue){
  //   // const filteredArray = searchedArray.filter((rec) => {
  //   //   console.log(filterValue)
  //   // })
  // }


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

            // elevatorFunction={elevatorFunction}
          />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home allRecs={searchedArray} />   
        </Route>
      </Switch>
    </div>
  );
}

export default App;
