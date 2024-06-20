import React from 'react'

import './Resume.css'

const Resume = () => {
    const resumeFilePath = './assets/Resume.pdf'
    const link = document.createElement('a')
    link.href = resumeFilePath
    link.setAttribute('download', true);
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    return (
        <div>Resume</div>
    )
}

export default Resume