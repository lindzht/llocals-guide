import React from 'react';
import {Link} from 'react-router-dom';
import nicholas from "../images/nicholas.jpeg";

function Home ({allRecs, setSelectedCategory}) {

    setSelectedCategory("All");

    let defaultObj = {
        name: "",
        img: "",
        area: "",
        borough: "",
        description: ""
    }

	const length = allRecs.length;
	const randomIndex = Math.floor(Math.random() * length);
	let randomCard = allRecs[randomIndex] || defaultObj;

	return (
        <div className='home-container'>
            {randomCard.img ? <img src={randomCard.img} alt={randomCard.name} /> : <img src={nicholas} alt={randomCard.name} /> }
            <div className='random-description'>
                <h2>{randomCard.name}</h2>
                <h3 style={{ fontStyle: "italic" }}>{randomCard.area}, {randomCard.borough}</h3>
                <p>{randomCard.description}</p>
                <Link to={`/recommendations`}>More Suggestions ➡</Link>
            </div>
        </div>
	);
}

export default Home;