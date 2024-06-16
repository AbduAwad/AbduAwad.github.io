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
    <div className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container">
        {ProjectData.map((work, index) => {
          return (
            <img key={index} src={work.w_img} alt={work.w_name} />
          )
        })}
      </div>
      <div className="mywork-showmore">
        <p>More Projects</p>
        <div className='arrow-outward-icon'>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

const ProjectData = [
  { /* VsCode Extension: Nokia WFM */
    w_no: 1,
    w_name: 'Project 1',
    w_img: project6_img,
  },
  { /* Personal AI Chatbot */
    w_no: 2,
    w_name: 'Project 2',
    w_img: project2_img,
  },
  { /* Relational Database optimiser - soccer database */
    w_no: 3,
    w_name: 'Project 3',
    w_img: project3_img,
  },
  { /* Chat Application with Web-Sockets */
    w_no: 4,
    w_name: 'Project 4',
    w_img: project4_img,
  },
  { /* Weather App */
    w_no: 5,
    w_name: 'Project 5',
    w_img: project5_img,
  },
  { /* Personal Portfolio */
    w_no: 6,
    w_name: 'Project 6',
    w_img: project1_img,
  },
]
export default MyProjects