import React from 'react';
import {Link} from 'react-router-dom';

function Home ({allRecs}) {

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
            <img src={randomCard.img} alt={randomCard.name} />
            <div className='random-description'>
                <h2>{randomCard.name}</h2>
                <h3>
                    {randomCard.area}, {randomCard.borough}
                </h3>
                <p>{randomCard.description}</p>
                <Link to={`/recommendations`}>More Suggestions ➡</Link>
            </div>
        </div>
	);
}

export default Home;