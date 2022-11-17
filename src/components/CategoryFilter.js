import React from "react";
import {Link} from "react-router-dom";

function CategoryFilter ({setSelectedCategory}) {

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
    
    return (
        <div className="category-container">
            <h4>Filter By Category:</h4> 
            <div className="categories">
                <Link to={`/recommendations`}>
                    <button id="all" onClick={handleShowAllClick}>All</button>
                </Link>
                <Link to={`/recommendations/music`}>
                    <button onClick={handleMusicClick}>🎶</button>
                </Link>
                <Link to={`/recommendations/art`}>
                    <button onClick={handleArtClick}>🎨</button>
                </Link>
                <Link to={`/recommendations/coffee`}>
                    <button onClick={handleCoffeeClick}>☕️</button>
                </Link>
                <Link to={`/recommendations/food`}>
                    <button onClick={handleFoodClick}>🌭</button>
                </Link>
                <Link to={`/recommendations/bars`}>
                    <button onClick={handleBarsClick}>🍸</button> 
                </Link>
            </div>
        </div>
    )
}

export default CategoryFilter;