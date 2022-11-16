import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {
    faSalesforce,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = ()=> {
    const [letterClass] = useState('text-animate')
  
    const nameArray = ['','D', 'e', 'n', 'n', 'i', 's', '', 'H', 'i', 'c', 'k', 'o', 'x', ','];
    const jobArray = [
        'F',
        'u',
        'l',
        'l',
        ' ',
        'S',
        't',
        'a',
        'c',
        'k',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ]
   

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={30}
                />
                </h1>


            <h2>Full Stack Developer / JavaScript / React / Salesforce Admin</h2>

            </div>
            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSalesforce} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        </>
    )
}
export default Home;