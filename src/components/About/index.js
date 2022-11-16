import { useState } from 'react';
import {
  faSalesforce,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import React from 'react'
import Snowfall from 'react-snowfall'

const About = () => {
  const [letterClass ] = useState('text-animate')

  

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Motivated Full Stack Web Developer and Junior Salesforce Administrator looking to join a growing team to continue building and improving on my Salesforce platform and Web Development capabilities.
          </p>
          <p align="LEFT">
          Can provide administration and customization of internal and outward facing Salesforce products and front end/backend web development. Looking for a key position in a dynamic and entrepreneurial environment that is focused on growing a suite of products and services.
          </p>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
          <ul>
         <li>Front end programming languages HTML, Javascript, React, SASS and CSS</li> 
         <li>Version control systems, Git and GitHub</li> 
         <li>APIs like REST and SOAP as well as protocol like HTTP</li> 
         <li>Database storage solutions like JSON, SQL, and NoSQL</li> 
         <li>Graphic design and visual communications skills</li> 
         <li>Troubleshoot user and system issues, providing training, assistance, and solutions for end users</li> 
         <li>Deep functional understanding of business process on the Salesforce platform that can assist users with functional
            issues and requests</li> 
         <li>Creating and maintaining Reports, Dashboards, fields, assignment rules, validation rules, page layouts, flows and
            process builder</li> 
         <li>Setting up new users, profiles, permission sets and roles, Ensuring data integrity and security</li> 
         <li>Configure customized solutions within the SFDC platform to support critical business functions and meet project
            objectives and client requirements.</li> 
          </ul>
          
        </div>
        </div>
        <div className="stage-cube-cont">
        <Snowfall
  // Changes the snowflake color
  color="#7cc5d9"
  // Applied to the canvas element
  style={{opacity: '.4' }}
  // Controls the number of snowflakes that are created (default 150)
  snowflakeCount={100}
/>
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

export default About
