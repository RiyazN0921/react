import React from 'react'
import './Resume.css'

function Resume({ data, resumedispatch }) {
  const handleUpdate = (section, index) => {
    const updatedItem = prompt(`Update ${section} item:`, data[section][index])
    if (updatedItem) {
      resumedispatch({
        type: 'UPDATERESUME',
        section,
        index,
        payload: updatedItem,
      })
    }
  }

  function onPrint() {
    window.print()
  }

  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>{data.name}</h2>
      <hr />

      {/* Render Sections */}
      {Object.keys(data).map(
        (section) =>
          section !== 'name' && (
            <div key={section}>
              <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
              <ul>
                {data[section].map((item, index) => (
                  <li key={index}>
                    {typeof item === 'object' ? item.name : item}
                    <button onClick={() => handleUpdate(section, index)}>
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        resumedispatch({
                          type: 'DELETERESUME',
                          section,
                          payload: index,
                        })
                      }
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ),
      )}
      <button onClick={onPrint}>print</button>
    </div>
  )
}

export default Resume
