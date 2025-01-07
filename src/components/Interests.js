import React from 'react'

function Interests({ interests }) {
  return (
    <>
      <p className="head">Interests</p>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </>
  )
}

export default Interests
