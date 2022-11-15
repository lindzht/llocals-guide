import React, {useState} from 'react';

function RecCards ({rec}) {

    // TESTTTTT 
   // TESTTTTT 

   
    const [isFrontCard, setIsFrontCard] = useState(true)
    const [likes, setLikes] = useState(rec.likes)

    function handleOnClick () {
        setIsFrontCard(!isFrontCard);
    }

    function handleLikes () {

        fetch (`http://localhost:3000/recommendations/${rec.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                likes: likes +1
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setLikes(likes + 1)
    }

    return(
        <div className="card"> 
        {/* Front of Card */}

            {isFrontCard ? 
                <div id='front-card'> 
                    <h2 onClick={handleOnClick} >{rec.name}</h2>
                    <img src={rec.img} alt={rec.name}></img>
                    <h4>{rec.area}, {rec.borough}</h4>
                    <p>{rec.category}</p>
                    <button onClick={handleLikes}> {likes} 💖</button> 
                </div>
                : <div id='back-card'> 
                    <h3 onClick={handleOnClick} >{rec.name}</h3>
                    <h4>{rec.area}, {rec.borough}</h4>         
                    <p>{rec.description}</p>
                    <a href={rec.url}>Website</a> | <a href={rec.events}>Events</a>
                    <p>Submitted By: {rec.user}</p>
                </div>
            }
                


        {/* Back of Card 
            <h3>{rec.name}</h3>
            <h4>{rec.area}, {rec.borough}</h4>         
            <p>{rec.description}</p>
            <a href={rec.url}>Website</a> | <a href={rec.events}>Events</a>
            <p>Submitted By: {rec.user}</p>
        */}
        </div>
    )
}

export default RecCards; 