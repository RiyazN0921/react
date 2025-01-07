import React from 'react'

function Extracurriculars({ extracurriculars }) {
  return (
    <>
      <p className="head">Extracurriculars</p>
      <ul>
        {extracurriculars.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </>
  )
}

export default Extracurriculars
