import React from "react";

function CategoryFilter ({allRecCategories, allRecs, selectedCategory, setSelectedCategory}){

    function handleShowAllClick () {
        setSelectedCategory('All')
    }

    function handleMusicClick () {
        setSelectedCategory('🎶')
    }

    function handleArtClick () {
        setSelectedCategory('🎨')
    }

    function handleFoodClick () {
        setSelectedCategory('🌭')
    }

    function handleCoffeeClick () {
        setSelectedCategory('☕️')
    }
    function handleBarsClick () {
        setSelectedCategory('🍸')
    }
    
    return(
        <div className="category-container">
                <h4>Filter By Category:</h4> 
            <div className="categories">
                <button id="all" onClick={handleShowAllClick}>All</button>
                <button onClick={handleMusicClick}>🎶</button>
                <button onClick={handleArtClick}>🎨</button>
                <button onClick={handleCoffeeClick}>☕️</button>
                <button onClick={handleFoodClick}>🌭</button>
                <button onClick={handleBarsClick}>🍸</button>
            </div>
        </div>
    )
}

export default CategoryFilter;


