import React from 'react'

function Skills({ skills }) {
  return (
    <>
      <p className="head">Skills</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  )
}

export default Skills
