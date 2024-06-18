import './Work.css'

import React from 'react'
import work1_img from '../../assets/work.png'
import work2_img from '../../assets/work2.jpg'
import work3_img from '../../assets/work3.jpg'

const Work = () => {
  return (
    <div className='work'>
      <div className="work-title">
        <h1>Work Experience</h1>
      </div>
      <div className="work-container">
        {WorkData.map((work, index) => {
          return (
            <div className="project-card">
              <img key={index} src={work.w_img} alt={work.w_name} />
              <div className="project-overlay">
                <h2>{work.w_name}</h2>
                <p>{work.w_description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const WorkData = [
  {
    w_no: 1,
    w_name: 'Delivery Automation Software Developer Intern',
    w_img: work1_img,
    w_description: 'April 2023 - September 2023',
  },
  {
    w_no: 2,
    w_name: 'Teaching Assistant - Python Procedural Programming',
    w_img: work2_img,
    w_description: 'September 2023 - April 2024',
  },
  {
    w_no: 3,
    w_name: 'Network Automation Software Engineer Intern',
    w_img: work3_img,
    w_description: 'April 2024 - September 2024',
  }
];

export default Work