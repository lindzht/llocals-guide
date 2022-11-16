import React, {useState} from "react";
// import RecCards from "./RecCards";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Home ({allRecs}){

    const randomIndex = Math.floor(Math.random() * allRecs.length);
    const randomCard = allRecs[randomIndex];
    // const randomRecCardArray = [allRecs[randomIndex]]
    
    // const randomCard = randomRecCardArray.map ((recObj) => {
    //     return <RecCards rec={recObj} />
    // })

    // console.log(randomCard.img);

    // const data = [
    //     {
    //      image: require('https://www.syfy.com/sites/syfy/files/styles/blog-post-embedded--tablet-1_5x/public/2019/10/faceoff_cage.jpg'), 
    //      caption:"Caption",
    //      description:"Description Here"
    //     },
    //     {
    //       image:require('https://www.syfy.com/sites/syfy/files/styles/blog-post-embedded--tablet-1_5x/public/2019/10/faceoff_cage.jpg'), 
    //       caption:"Caption",
    //       description:"Description Here"
    //      },
    //   ]

      const [index, setIndex] = useState(0);
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

      

    return(
        <div className="home-container">
            <h1 id="title">LLocal's Guide ✌️ NYC</h1>
            {/* {randomCard} */}
            {/* <h3>{randomCard.name}</h3>
            <img src={randomCard.img} alt={randomCard.name} /> */}
      

            <div className="carousel-container">
                <Carousel activeIndex={index} onSelect={handleSelect} style={{height: 500}} >
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3 style={{color: "black", backgroundColor: "white"}}>{randomCard.name}</h3>
                        </Carousel.Caption>
                        <img src={randomCard.img} alt={randomCard.name} style={{height: 1000}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3 style={{color: "black", backgroundColor: "white"}}>{randomCard.name}</h3>
                        </Carousel.Caption>
                        <img src={randomCard.img} alt={randomCard.name} style={{height: 1000}}/>
                    </Carousel.Item>
                </Carousel>
            </div>
        

        </div>
    )
}

export default Home ;

