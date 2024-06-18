import './MyProjects.css'

import React from 'react'
import project1_img from '../../assets/project1.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import project4_img from '../../assets/project4.jpg'
import project3_img from '../../assets/project3.jpg'
import project2_img from '../../assets/project2.png'
import project5_img from '../../assets/project5.jpg'
import project6_img from '../../assets/project6.jpg'

const MyProjects = () => {
  return (
    <div id='projects' className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container">
        {ProjectData.map((work, index) => {
          return (
            <div className="project-card">
              
              <img key={index} src={work.w_img} alt={work.w_name} />
              <div className="project-overlay">
                <h2>{work.w_name}</h2>
                <p>{work.w_description}</p>
                <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                  <button className="project-button">View Project</button>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mywork-showmore">
        <a href="https://github.com/AbduAwad?tab=repositories" target="_blank" rel="noopener noreferrer">
          <p>More Projects</p>
        </a>
        <div className='arrow-outward-icon'>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

const ProjectData = [
  {
    w_no: 1,
    w_name: 'Nokia WFM VsCode Extension',
    w_img: project6_img,
    w_description: 'The VsCode extension Nokia Workflow Manager (WFM), connects to a live instance of NSP optimizing workflow development for 300+ Nokia network operators',
    w_link: 'https://marketplace.visualstudio.com/items?itemName=Nokia.nokia-wfm'
  },
  {
    w_no: 2,
    w_name: 'Personalised A.I Chatbot',
    w_img: project2_img,
    w_description: 'Integrating the OpenAI API and LangChain LLM to allow users to train a personal A.I chatbot with personal data',
    w_link: 'https://PrivateRepository.com/project2'
  },
  {
    w_no: 3,
    w_name: 'Database Optimization Engine',
    w_img: project3_img,
    w_description: 'Implemented a relational database for Pro Soccer Stats, utilizing advanced ER modeling, strategic indexing, and table partitioning, to optimise query run times by 20x',
    w_link: 'https://github.com/AbduAwad/Soccer-Stats-Database-Application'
  },
  {
    w_no: 4,
    w_name: 'Real-Time Chat Application',
    w_img: project4_img,
    w_description: 'A real-time chat application built using Node.js and Web Sockets, enabling multiple users to communicate via web browsers.',
    w_link: 'https://github.com/AbduAwad/Chat-Applications-Web-Sockets'
  },
  {
    w_no: 5,
    w_name: 'Online Weather App',
    w_img: project5_img,
    w_description: 'A weather app website that securely manages user accounts and passwords using encryption and MongoDB. It integrates with the OpenWeatherMap API, allowing users to register, authenticate, and access detailed weather data for any city',
    w_link: 'https://github.com/AbduAwad/Weather-App'
  },
  {
    w_no: 6,
    w_name: 'Personal Portfolio Website',
    w_img: project1_img,
    w_description: 'A personal portfolio website using React.js, html, css, and javascript, and deployed it using GitHub Pages.',
    w_link: 'https://github.com/AbduAwad/AbduAwad.github.io'
  },
];

export default MyProjects