import React from "react";
import RecCards from "./RecCards";

function Home ({allRecs}){

    const randomIndex = Math.floor(Math.random() * allRecs.length);
    const randomCard = allRecs[randomIndex];
    // const randomRecCardArray = [allRecs[randomIndex]]
    
    // const randomCard = randomRecCardArray.map ((recObj) => {
    //     return <RecCards rec={recObj} />
    // })

    // console.log(randomCard.img);

    return(
        <div className="home-container">
            <h1 id="title">LLocal's Guide ✌️ NYC</h1>
            {/* {randomCard} */}
            <div className="random-container">
                {/* <h3>{randomCard.name}</h3>
                <img src={randomCard.img} alt={randomCard.name} /> */}
            </div>

        </div>
    )
}

export default Home ;

