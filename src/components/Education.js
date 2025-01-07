import React from 'react'

function Education({ education }) {
  return (
    <>
      <p className="head">Education</p>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.link ? (
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                {edu.name}
              </a>
            ) : (
              edu.name
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Education
