import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Snowfall from 'react-snowfall';
import Gallery from "./Gallery";

const Portfolio2 = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
       
    }, []);

return (<>
            <Snowfall color="#7cc5d9" style={{opacity: '.4' }} snowflakeCount={100}/>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                {/* <p>Please checkout my work as I progress with my Full Stack Development skills! Each site links
                    to the live site, you can also view the code in its Repo from my Github page. Keep in mind the sites are
                    deployed using Heroku who sleeps inactive sites to conserve on energy!
                </p> */}
                <div className="gallery">
                
                    
                <Gallery />
                </div>
                
            </div>
</>
        
    );
};
export default Portfolio2;