import React from "react";

import leah from "../images/leah.png";
import lindsay from "../images/lindsay.png";
import about from "../images/text.png";

function About ({setSelectedCategory}) {

    setSelectedCategory("All");

    return (
        <div className="about-container">
            <h2>Sup!</h2>
            <div class="image-box">
                <div class="image-container">
                    <img class="bio" src={leah} alt="leah" /> 
                    <p>leah</p>
                </div>
                <div class="image-container">
                    <img class="bio" src={lindsay} alt="lindsay" title="lindsay" />
                    <p>lindsay</p>
                </div>
            </div>
            <img style={{width: 700}}src={about} alt="text" />
            {/* <p>NYC's hottest new locals only guide 😈</p>  */}
        </div>
    )
}

export default About;