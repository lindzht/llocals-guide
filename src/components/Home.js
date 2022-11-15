import React from "react";
import RecCards from "./RecCards";

function Home ({allRecs}){

    const randomIndex = Math.floor(Math.random() * allRecs.length);

    // const randomRec = allRecs[randomIndex]

    console.log(allRecs);

    const randomRec = allRecs.filter( (rec) => {
        // if (rec.id === randomIndex) {
        //     return <RecCards key={rec.id} rec={rec} />
        // }
    })



    return(
        <div>
            <h1>Home!</h1>
            {randomRec}
        </div>
    )
}

export default Home ;