import React from 'react';
import RecCards from './RecCards';
import Search from './Search';
import CategoryFilter from './CategoryFilter';

function RecList ({allRecs, searchValue, setSearchValue, selectedCategory,
    setSelectedCategory, allRecCategories}) {

    const renderRecs = allRecs.map((rec) => {
        return <RecCards key={rec.id} rec={rec} /> 
    })
   
    return (
        <div className="rec-list">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <br></br>
            <CategoryFilter allRecs={allRecs} selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory} allRecCategories={allRecCategories}/>
            <br></br>
            <div className='card-list'>
            {renderRecs}
            </div>
        </div>
    )
}

export default RecList;