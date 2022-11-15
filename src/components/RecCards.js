import React, {useState} from 'react';

function RecCards ({rec}){

    const [isFrontCard, setIsFrontCard] = useState(true)

    function handleOnClick (){
        setIsFrontCard(!isFrontCard);
    }


    return(
        <div onClick={handleOnClick}> 
        {/* Front of Card */}

            {isFrontCard ? 
                <div className='front-card'> 
                    <h2>{rec.name}</h2>
                    <img src={rec.img} alt={rec.name}></img>
                    <h4>{rec.area}, {rec.borough}</h4>
                    <p>{rec.category}</p>
                    <p>{rec.likes}</p>
                </div>
                : <div className='back-card'> 
                    <h3>{rec.name}</h3>
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