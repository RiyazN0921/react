import React from 'react'

function Experience({ experience }) {
  return (
    <>
      <p className="head">Experience</p>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
    </>
  )
}

export default Experience
