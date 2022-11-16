import React, {useState} from 'react';
import NewRecForm from './NewRecForm';
import RecCards from './RecCards';
import Search from './Search';
import CategoryFilter from './CategoryFilter';

function RecList ({addNewRec, allRecs, searchValue, setSearchValue, elevatorFunction, selectedCategory,
    setSelectedCategory, allRecCategories}) {

    

    const renderRecs = allRecs.map((rec) => {
        return <RecCards key={rec.id} rec={rec} /> 
    })

    const [showForm, setShowForm] = useState(false)

    function handleShowForm () {
        setShowForm(!showForm)
    }

    return(
        <div>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} elevatorFunction={elevatorFunction}/>
            <br></br>
            <CategoryFilter allRecs={allRecs} selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory} allRecCategories={allRecCategories}/>
            <br></br>
            {/* <button onClick={handleShowForm}>{showForm ? 'Hide Form' : 'Add New Rec'}</button> */}
            {/* {showForm ? <NewRecForm addNewRec={addNewRec} />  : null}  */}
            <div className='card-list'>
                {renderRecs}
            </div>
        </div>
    )
}

export default RecList;