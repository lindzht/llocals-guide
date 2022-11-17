import React, {useState} from 'react';
import brooklyn from "../images/brooklynbr.jpeg";
import nicholas from "../images/nicholas.jpeg";

function RecCards ({rec}) {
   
    const [isFrontCard, setIsFrontCard] = useState(true);
    const [likes, setLikes] = useState(rec.likes);

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

    return (

        <div className="card"> 
            {isFrontCard ? 
                <div id='front-card'> 
                    <h3 onClick={handleOnClick} >{rec.name}</h3>
                    {rec.img ? 
                        <img onClick={handleOnClick} src={rec.img} alt={rec.name}></img>
                    : <img onClick={handleOnClick} src={nicholas} alt={rec.name}></img> 
                    || <img onClick={handleOnClick} src={brooklyn} alt={rec.name}></img> }
                    <h4>{rec.area}, {rec.borough}</h4>
                    <p id='emoji'>{rec.category}</p> 
                    <button onClick={handleLikes}> {likes} ❤️</button> 
                </div> 
                : <div id='back-card'> 
                    <h3 onClick={handleOnClick} >{rec.name}</h3>
                    <h4>{rec.area}, {rec.borough}</h4>         
                    <p>{rec.description}</p>
                    <a href={rec.url}>Website</a>
                    <p>Submitted By: {rec.user}</p>
                </div>
            }
        </div>
    )
}

export default RecCards; 